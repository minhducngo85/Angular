import { delay, Observable, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn: boolean = false;

  login(userName: string, password: string): Observable<boolean> {
    console.log(userName);
    console.log(password);

    // send username and password to backend login
    if (userName == 'admin' && password == 'admin') {
      this.isUserLoggedIn = true;
    }

    // set localstorage to share within the app
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");
    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => {
        console.log("User Authentication is successful: " + val);
      })
    );
  }

  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }

  constructor() { }
}
