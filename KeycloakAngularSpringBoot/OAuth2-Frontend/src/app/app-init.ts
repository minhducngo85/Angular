import { AuthConfig, NullValidationHandler, OAuthService } from "angular-oauth2-oidc";
import { environment } from "src/environments/environment";

export function oauthInitializer(oauthService: OAuthService): () => Promise<any> {
    return (): Promise<any> => {
        return new Promise(async (resolve, reject) => {
          try {
            const authConfig: AuthConfig = {
                issuer: environment.keycloak.issuer,
                redirectUri: window.location.origin + "/students",
                clientId: environment.keycloak.clientId,
                //dummyClientSecret: '2ea5dc66-8e1c-4e7c-aac0-52a42594a6ac',
                // offline_access: enbale refresh token
                scope: 'openid profile email offline_access roles',
                responseType: 'code',
                requireHttps: false,
                // at_hash is not present in JWT token
                disableAtHashCheck: true,
                //postLogoutRedirectUri: window.location.origin + "/students",
                showDebugInformation: true
            };

            oauthService.configure(authConfig);
            oauthService.tokenValidationHandler = new NullValidationHandler();
            oauthService.loadDiscoveryDocumentAndTryLogin();
            //oauthService.setupAutomaticSilentRefresh();
            resolve(resolve);
          } catch (error) {
            reject(error);
          }
        });
      };
}