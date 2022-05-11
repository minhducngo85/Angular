import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servcice/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    console.log("logged out!");
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
