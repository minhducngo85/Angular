import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloakService: KeycloakService) { }

  getUsername(): string {
    return this.keycloakService.getUsername();
  }

  logout(): void {
    this.keycloakService.logout();
  }

  login(): void {
    this,this.keycloakService.login();
  }

  getLoggedUser() : any {
    return this.keycloakService.getKeycloakInstance().idTokenParsed;
  } 

  getToken(): any {
    return this.keycloakService.getToken();
  }

  getRoles(): any {
    return this.keycloakService.getUserRoles();
  }
}
