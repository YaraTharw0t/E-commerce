import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _HttpClient:HttpClient) { }


  setRegister(userdata:object):Observable<any>{

    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,userdata )


  }

  setLogin(userdata:object):Observable<any>{

    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,userdata )


  }

  getToken(){
    const encode = localStorage.getItem('token')

    if(encode!=null){
      const decode = jwtDecode(encode)
      console.log(decode);
      


    }
  }
}
