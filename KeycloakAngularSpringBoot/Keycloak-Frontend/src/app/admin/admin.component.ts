import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  message = 'message';
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${environment.backendUrl}/admin`).subscribe((data :any) => {
      this.message = data.message;
    });
  }

}
