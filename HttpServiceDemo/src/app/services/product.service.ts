import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
@Injectable()
export class ProductService{

    apiURL : string = 'http://localhost:3001/product/'; 

    constructor(private http: Http){}

    getProductList():Observable<Response>{
        return this.http.get(this.apiURL);
    }

}