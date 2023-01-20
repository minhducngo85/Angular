import { Injectable, Component } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';


/**
 * class to project url like SecurityCOnfig in SpringBoot
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {
  console = console;

  constructor(protected override readonly router: Router, protected readonly keycloak: KeycloakService) {
    super(router, keycloak);
  }

  async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    // Force the user to log in if currently unauthenticated.
    console.log(`authenticated: ${this.authenticated}`);
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url,
      });
    }

    // Get the roles required from the route.
    const requiredRoles = route.data['roles'];
    console.log(`reqried roles: ${requiredRoles}`);
    // Allow the user to to proceed if no additional roles are required to access the route.
    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    // Allow the user to proceed if all the required roles are present.
    if (requiredRoles.every((role) => this.roles.includes(role))) {
      return true;
    } else {
      // redirect to error page if the user doesn't have the nessecairy  role to access
      this.router.navigate(['access-denied']);
      return false;
    }
  }
 
}
