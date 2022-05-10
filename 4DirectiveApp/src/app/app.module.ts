import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CustomstyleDirective } from './customstyle.directive';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CustomstyleDirective,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
