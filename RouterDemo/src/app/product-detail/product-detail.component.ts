import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productId : number = 0;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.productId = params.id;        
      }
    )

    this.activatedRoute.paramMap.subscribe(
      (paramsMap)=>{
        this.productId = parseInt(paramsMap.get('id'));
        console.log(this.productId+" ==========")
      }
    )
  }

}
