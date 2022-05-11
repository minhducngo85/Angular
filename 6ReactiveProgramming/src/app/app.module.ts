import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { DebugComponentComponent } from './debug-component/debug-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    DebugComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
