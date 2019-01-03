import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';
import { Product } from './product.model';
@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css'],
  providers: [ProductService]
})
export class ManageProductComponent implements OnInit {

  productList : Product[] = [];

  constructor(private productService : ProductService,private router:Router) { }

  ngOnInit() {
    this.productService.getProductList().subscribe(
      (productList: Product[])=>{
        this.productList = productList;
      }
    )
  }

  addNewProduct(){
    this.router.navigate(['addProduct']);
  }
}
