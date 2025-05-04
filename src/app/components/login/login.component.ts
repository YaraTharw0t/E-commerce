import { AuthService } from './../../shared/services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    errMsdg:string = "";
    isLoding:boolean =false
    userData:string = "" ;
  
    constructor (private _AuthService :AuthService , private _Router:Router,private _FormBuilder:FormBuilder){}
 
 loginForm:FormGroup = this._FormBuilder.group(
  {
    email:[null,[Validators.required, Validators.email]],
    password:[null,[Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]],

   

  }
)
  
  handelform():void{
  
    this.isLoding = true;
  
   
    const userData = this.loginForm.value
  
    if(this.loginForm.valid==true) {
  
      
  this._AuthService.setLogin(userData).subscribe({
    next:(respose)=>{
      if(respose.message == "success"){
        localStorage.setItem('token', respose.token)
         this._AuthService.getToken()
        this._Router.navigate(['home'])
        this.isLoding = false
      
        
      }
  
    ;
      
  
    },
    error:(err)=>{
      this.errMsdg = err.error.message
      this.isLoding=false;
  
      
  
    }
  
  })
  
  
    }
    else{
      this.loginForm.markAllAsTouched()
    }
  
  

  }}
