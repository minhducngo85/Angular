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
    this.configure();
    //this.setupAutomaticSilentRefresh();
  }

  authConfig: AuthConfig = {
    issuer: 'http://localhost:8080/auth/realms/SpringBootRealm',
    redirectUri: window.location.origin + "/students",
    clientId: 'angular-demo',
    //dummyClientSecret: '2ea5dc66-8e1c-4e7c-aac0-52a42594a6ac',
    scope: 'openid profile email offline_access angular-demo',
    responseType: 'code',
    requireHttps: false,
    // at_hash is not present in JWT token
    disableAtHashCheck: true,
    //postLogoutRedirectUri: window.location.origin + "/students",
    showDebugInformation: true
  }

  public login() {
    this.oauthService.initLoginFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }

  private configure() {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  private setupAutomaticSilentRefresh() {
    this.oauthService.setupAutomaticSilentRefresh();
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
    console.log(this.hasValidAccessToken);
    this.accessToken = this.oauthService.getAccessToken();
    console.log(this.accessToken);
  }


  public getRoles(){
  }
}
