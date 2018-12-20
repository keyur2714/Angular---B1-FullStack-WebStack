import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ProductService } from './services/product.service';
import { Product } from './services/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Http Service Demo';

  productList: Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(){   
  }

}
