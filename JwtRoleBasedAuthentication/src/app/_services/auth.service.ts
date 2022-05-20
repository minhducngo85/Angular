import { AppSettings } from './../_helpers/app-setting';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/** The authentication endpoint */
const AUTH_API = AppSettings.BACKEND_ENDPOINT + "/api/auth/";


/**
 * the autehntication service: This service sends signup, login HTTP POST requests to back-end.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  /**
   * to login a user
   * 
   * @param username
   *  the username 
   * @param password
   *  the password 
   * @returns 
   *  the user details
   */
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', { username, password }, AppSettings.httpOptions);
  }

  /**
   * to register a new user
   * 
   * @param username 
   * @param email 
   * @param password 
   * @returns if successful e.g.
   * {
   * "id": 2,
   * "username": "moderator",
   * "email": "moderator@minhduc-tuto.com",
   * "roles": [
   *     "ROLE_MODERATOR"
   * ],
   * "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtb2RlcmF0b3IiLCJpYXQiOjE2NTMwNDgyMDgsImV4cCI6MTY1MzEzNDYwOH0.hdNrGwP27K-qaIZjjdp3yOynFwYMYVYMTsvfA6nKY2aE6H2g9u33veXa_nHDRE6m54qXWuARqxE7eUv1tUZmMQ",
   * "tokenType": "Bearer"
   * }
   */
  register(username: string, email: string, password: string): Observable<any> {
    console.log(JSON.stringify(username));
    console.log(JSON.stringify(email));
    console.log(JSON.stringify(password));
    const body = { username, email, password };
    console.log(JSON.stringify(body));
    return this.http.post(AUTH_API + 'signup', body, AppSettings.httpOptions);
  }
}
