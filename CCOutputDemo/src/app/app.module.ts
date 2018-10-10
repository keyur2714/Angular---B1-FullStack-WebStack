import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { ReverseStringComponent } from './reverse-string/reverse-string.component';
import { CountryComponent } from './country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ReverseStringComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
