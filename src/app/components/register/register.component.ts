import { AuthService } from './../../shared/services/auth.service';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  errMsdg:string = "";
  isLoding:boolean =false

  constructor (private _AuthService :AuthService , private _Router:Router ,private _FormBuilder:FormBuilder){}

registerForm:FormGroup = this._FormBuilder.group(
  {
    name:[null,[Validators.required,Validators.minLength(3), Validators.maxLength(20)]],
    email:[null,[Validators.required, Validators.email]],
    password:[null,[Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]],
    rePassword:[null,[Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]],
    phone:[null, [Validators.pattern(/^01[0125][0-9]{8}$/)]],

  }
)

handelform():void{

  this.isLoding = true;

 
  const userData = this.registerForm.value

  if(this.registerForm.valid==true) {

    
this._AuthService.setRegister(userData).subscribe({
  next:(respose)=>{
    if(respose.message == "success"){
      this._Router.navigate(['login'])
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
    this.registerForm.markAllAsTouched()
  }




}
}
