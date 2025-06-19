import { AuthService } from './../../shared/services/auth.service';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
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


  // this road is good but not use with conformpass

// registerForm:FormGroup = this._FormBuilder.group({

//     name:[null,[Validators.required,Validators.minLength(3), Validators.maxLength(20)]],
//     email:[null,[Validators.required, Validators.email]],
//     password:[null,[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]],
//     rePassword:[null,[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]],
//     phone:[null, [Validators.pattern(/^01[0125][0-9]{8}$/)]],

//   },{validators:[this.conFormPassword]}
// );


// use this  road bec to use conform password and repassword 
registerForm:FormGroup= new FormGroup({
name:new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(20)] ),
 email: new FormControl ('' ,[Validators.required, Validators.email] ),
  password: new FormControl ('' ,[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)] ),
 rePassword: new FormControl (''),
  phone : new FormControl ('' ,[Validators.pattern(/^01[0125][0-9]{8}$/)] )

} , {validators:[this.conFormPassword]} as FormControlOptions
);


conFormPassword(Group:FormGroup):void{
  let password = Group.get('password');
  let rePassword = Group.get('rePassword')


  if (rePassword?.value === ''){
    rePassword?.setErrors({required:true})
  }

  else if(password?.value != rePassword?.value){

    rePassword?.setErrors({misMatch:true})

  }

}





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
