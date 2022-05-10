import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { DigitcountPipe } from './pipe/digitcount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    DigitcountPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
