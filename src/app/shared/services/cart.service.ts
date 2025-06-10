import { AuthService } from 'src/app/shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { count, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
idUser:any =''

  userData:any='';

  headers:any ={token:localStorage.getItem('token')}

  constructor(private _HttpClient:HttpClient ) { }

  addToCart(productId:string):Observable<any>{
    return  this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
      productId :productId
    },

    {
      headers:this.headers

      
    }
  
  
  )
  }



  getUserCart():Observable<any>{
    return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
      headers:this.headers
    })
  }


  removeCartItem(idRemove:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${idRemove}`,{
      headers:this.headers
    })


  }


  upDateItem(idProduct:string,count:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${idProduct}`,{
      count:count
    },{
      headers:this.headers
    })

    
  }


checkOut(idCart:string, shippingAdress:object):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${idCart}?url=http://localhost:4200`, {

     shippingAddress:shippingAdress
        
    
  },{


    headers:this.headers
  })
}


getToken(){
   let etoken = localStorage.getItem('token')
   if(etoken!=null){
    let decode = jwtDecode(etoken)

    console.log(decode);
    

    this.userData =decode


  this.idUser =this.userData.id

return this.idUser




    
   }


}

getAllOrders(Id:string):Observable<any>{
  
  
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${Id}`)
}

}
