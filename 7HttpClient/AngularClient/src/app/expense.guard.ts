import { AuthService } from './servcice/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean | UrlTree {
    console.log("Url: " + url)
    let val: string = localStorage.getItem('isUserLoggedIn') as string;

    if (val != null && val == "true") {
      if (url == "/login")
        this.router.parseUrl('/expenses');
      else
        return true;
    }
    return this.router.parseUrl('/login');
  }

}
