import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    PageNotFoundComponent,
    ManageProductComponent,
    ProductDetailComponent,
    ProductEntryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([      
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home' , component : HomeComponent},
      {path: 'aboutus' , component : AboutusComponent},
      {path: 'contactus' , component : ContactusComponent}, 
      {path: 'product', component : ManageProductComponent,
        children:[
          {path: ':id',component : ProductDetailComponent}
        ]
      },
      {
        path: 'addProduct' , component : ProductEntryComponent
      },     
      { path : '**' , component : PageNotFoundComponent}    
    ]),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
