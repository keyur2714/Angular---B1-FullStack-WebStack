import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MunuitemListComponent } from './munuitem-list/munuitem-list.component';
import { CustomGridComponent } from './custom-grid/custom-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MunuitemListComponent,
    CustomGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
