import { Component } from '@angular/core';
import { NullValidationHandler, OAuthService, AuthConfig } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Students';
  public claims: any;
  public hasValidAccessToken: boolean = false;
  public accessToken: any;
  constructor(private oauthService: OAuthService) {

  }

  public login() {
    this.oauthService.initLoginFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }

  public name() {
    this.claims = this.oauthService.getIdentityClaims();
    this.claims = JSON.stringify(this.claims);
    console.log(this.claims);
    if (!this.claims) return null;
    return this.claims;
  }

  public validAccessToken() {
    this.hasValidAccessToken = this.oauthService.hasValidAccessToken();
    //console.log(this.hasValidAccessToken);
    this.accessToken = this.oauthService.getAccessToken();
    //console.log(this.accessToken);
  }

}
