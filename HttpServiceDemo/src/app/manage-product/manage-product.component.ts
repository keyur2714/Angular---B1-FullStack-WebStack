import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../services/product.model';
import { Response } from '@angular/http'; 
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css'],
  providers: [ProductService]
})
export class ManageProductComponent implements OnInit {

  newProduct: Product = new Product();
  errorCode : string = '';
  productList: Product[] = [];
  statusCode: number = 0;
  isUpdate: boolean = false;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList():void{
    this.productService.getProductList().subscribe(
      (response:Product[])=>{
        console.log(response);
        this.productList = response;
      },
      (error)=>{
        this.errorCode = error;
      }
    )
  }

  saveProduct(frm):void{
    if(frm.valid){
      if(this.newProduct.warranty){
        this.newProduct.warranty = 'Y';
      }else{
        this.newProduct.warranty = 'N';
      }
      this.productService.saveProduct(this.newProduct).subscribe(
        (response:Response)=>{
          console.log(response);
          console.log(response.json());
          this.statusCode = 201;
          this.getProductList();
        },
        (error)=>{

        }
      )
    }
  }

  updateProduct(frm):void{
    if(frm.valid){
      if(this.newProduct.warranty){
        this.newProduct.warranty = 'Y';
      }else{
        this.newProduct.warranty = 'N';
      }
      this.productService.updateProduct(this.newProduct).subscribe(
        (response:Response)=>{
          console.log(response);
          console.log(response.json());
          this.statusCode = 204;
          this.getProductList();
        },
        (error)=>{

        }
      )
    }
  }

  reset(frm:NgForm):void{
    this.newProduct.id = 0;
    this.newProduct.code = '';
    this.newProduct.description = '';
    this.newProduct.color = '';
    this.newProduct.unitPrice = 0;
    this.newProduct.warranty = 'false';
    this.statusCode = 0;
  }

  edit(id:number):void{
    this.isUpdate = true;
    this.productService.getProductById(id).subscribe(
      (product:Product)=>{
        this.newProduct = product;
      },
      (error)=>{

      }
    )    
  }
  delete(id:number):void{
    if(confirm("Are you sure want to delete?")){

      this.productService.deleteProduct(id).subscribe(
        (response:Response)=>{
          console.log(response.json());
          this.statusCode = 301;
          this.getProductList();
        },
        (error)=>{

        }
      )    

    }

    
  }
}
