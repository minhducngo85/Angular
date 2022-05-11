import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servcice/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  formData: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      userName: new FormControl("admin"),
      password: new FormControl("admin"),
    });
  }

  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;
    this.authService.login(this.userName, this.password).subscribe((result: boolean) => {
      console.log("Is Login Success: " + result);
      if (result) {
        this.router.navigate(['/expenses']);
      }
    }
    );
  }

}
