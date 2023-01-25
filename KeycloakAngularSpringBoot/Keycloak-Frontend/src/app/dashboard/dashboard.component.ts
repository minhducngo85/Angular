import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  message = 'message';
  message2 = 'message 2';
  token = "";
  username="";
  roles = "";

  constructor(private http: HttpClient, private authService : AuthService) { }

  ngOnInit(): void {
    // get dashboard endpoint
    const observer = {
      next: (data: any) => {
        this.message = data.message;
      },
      error: (err: any) => {
        this.message = '<p style="color:red;">Error:' + err.message + '</P>';
      }

    }
    this.http.get(`${environment.backendUrl}/dashboard`).subscribe(observer);

    // customer endpoint
    const observer2 = {
      next: (data: any) => {
        this.message2 = JSON.stringify(data);
      },
      error: (err: any) => {
        this.message2 = '<p style="color:red">Error: \n' + err.message + '</P>';
      }
    }
    this.http.get(environment.backendUrl + "/customers").subscribe(observer2);
  }

  async viewToken(): Promise<void> {
    this.token = "Token: "
    this.token +=await this.authService.getToken();
    this.username = "Username: " + this.authService.getUsername();
    this.roles = "Roles: " + this.authService.getRoles();
  }

}
