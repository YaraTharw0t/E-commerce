import { AuthService } from './../../shared/services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  
    constructor (private _AuthService :AuthService , private _Router:Router){}
  
  loginForm:FormGroup = new FormGroup(
    {
      email:new FormControl(null,[Validators.required, Validators.email] ),
      password:new FormControl(null,[Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)] ),
    
    
  
  
    }
  )
  
  handelform():void{
  
    this.isLoding = true;
  
   
    const userData = this.loginForm.value
  
    if(this.loginForm.valid==true) {
  
      
  this._AuthService.setLogin(userData).subscribe({
    next:(respose)=>{
      if(respose.message == "success"){
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
  
  

  }}
