import { APP_INITIALIZER, NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { StudentDetailComponent }  from './student-detail/student-detail.component';
import { StudentsComponent }      from './students/students.component';
import { StudentSearchComponent }  from './student-search/student-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { oauthInitializer } from './app-init';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: [environment.backendUrl],
          sendAccessToken: true
      }
  })
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentsComponent,
    StudentDetailComponent,
    MessagesComponent,
    StudentSearchComponent
  ],
  providers: [// add this provider to initialize Keycloak
    {
      provide: APP_INITIALIZER,
      useFactory: oauthInitializer,
      deps: [OAuthService],
      multi: true,
    }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
