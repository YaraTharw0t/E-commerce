import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _HttpClient:HttpClient, private _Router:Router) { }

   userData:any=''

  setRegister(userdata:object):Observable<any>{

    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,userdata )


  }

  setLogin(userdata:object):Observable<any>{

    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,userdata )


  }


  logOut():void {

localStorage.removeItem('token')
this._Router.navigate(['login'])


  }


  getToken(){
    const encode = localStorage.getItem('token')

    if(encode!=null){
      const decode = jwtDecode(encode)
      console.log(decode);

      this.userData = decode


      
      


    }
  }
}
