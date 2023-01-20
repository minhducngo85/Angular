import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializer } from 'src/utils/app-init';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AdminComponent } from './admin/admin.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './manager/manager.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessDeniedComponent,
    ManagerComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule, // add keycloadAngular module
    HttpClientModule
  ],
  providers: [// add this provider
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [KeycloakService],
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
