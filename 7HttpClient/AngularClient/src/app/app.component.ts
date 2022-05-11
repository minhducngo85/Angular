import { Observable, of, delay, tap, startWith } from 'rxjs';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from './servcice/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Expense Manager';
  isUserLoggedIn = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  readLocalStorage() {
    let storeData = localStorage.getItem("isUserLoggedIn");
    if (storeData != null && storeData == "true")
      this.isUserLoggedIn = true;
    else
      this.isUserLoggedIn = false;
  }

  public get isLoggedIn$(): Observable<boolean> {
    this.readLocalStorage();
    return of(this.isUserLoggedIn);
  }
}
