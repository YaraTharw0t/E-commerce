import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetproductsService {

  constructor(private _HttpClient:HttpClient) { }
  
  // baseUrl:string= `https://ecommerce.routemisr.com/api/v1/`

  Product():Observable<any>{

    return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products`);


  }
  getDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

  }

getCategory():Observable<any>{

  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)

}



}
