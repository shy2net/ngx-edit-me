import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxEditMeModule } from 'ngx-edit-me';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxEditMeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
