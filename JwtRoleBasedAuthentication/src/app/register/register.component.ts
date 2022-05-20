import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /** Form object */
  form: any = {
    useranme: null,
    email: null,
    password: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  /**
   * the form submit action
   */
  onSubmit() {
    const { username, email, password } = this.form;
    console.log(username);
    console.log(email);
    console.log(password);
    this.authService.register(username, email, password).subscribe({
      next: data => { 
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => { 
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        console.log(this.errorMessage);
      }
    });
  }

}
