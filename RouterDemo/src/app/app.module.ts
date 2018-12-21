import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PageNotFoundComponent } from './page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([      
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home' , component : HomeComponent},
      {path: 'aboutus' , component : AboutusComponent},
      {path: 'contactus' , component : ContactusComponent},      
      { path : '**' , component : PageNotFoundComponent}    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
