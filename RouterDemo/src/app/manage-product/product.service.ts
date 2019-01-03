import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
@Injectable()
export class ProductService{

    apiURL : string = 'http://localhost:3000/product'; 

    constructor(private http: Http){}

    getProductList():Observable<Product[]>{
        return this.http.get(this.apiURL)
        .map((response:Response)=>{
                let body = response.json();
                for(let product of body){
                    product.warranty = product.warranty == 'Y' ? "Yes" : "No";
                }
                return body;
            }
        ).catch((error: Response | any)=>{
            console.error(error.message || error);
            return Observable.throw(error);}
        )
    }    

    saveProduct(product:Product):Observable<Response>{
        return this.http.post(this.apiURL,product);
    }

    updateProduct(product:Product):Observable<Response>{
        return this.http.put(this.apiURL+"/"+product.id,product);
    }

    getProductById(productId:number):Observable<Product>{
        return this.http.get(this.apiURL+"/"+productId)
        .map((response:Response)=>{
                let body = response.json();                
                return body;
            }
        ).catch((error: Response | any)=>{
            console.error(error.message || error);
            return Observable.throw(error);}
        )
    }

    deleteProduct(productId:number):Observable<Response>{
        return this.http.delete(this.apiURL+"/"+productId);
    }

}