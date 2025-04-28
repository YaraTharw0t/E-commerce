import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

registerForm:FormGroup = new FormGroup(
  {
    name:new FormControl(null,[Validators.required,Validators.minLength(3), Validators.maxLength(20)] ),
    email:new FormControl(null,[Validators.required, Validators.email] ),
    password:new FormControl(null,[Validators.pattern(/^[A-Z][a-z-0-9]{6,20}$/)] ),
    rePassword:new FormControl(null,[Validators.pattern(/^[A-Z][a-z-0-9]{6,20}$/)] ),
    phone:new FormControl(null, [Validators.pattern(/^01[0125][0-9]{8}$/)]),


  }
)

handelform():void{
console.log(this.registerForm.value);


}
}
