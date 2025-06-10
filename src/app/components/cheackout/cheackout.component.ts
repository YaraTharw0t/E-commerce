import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cheackout',
  templateUrl: './cheackout.component.html',
  styleUrls: ['./cheackout.component.css']
})
export class CheackoutComponent  implements OnInit{

  cartId:any =''

  // shippingAddress:string =''
  constructor(private _FormBuilder:FormBuilder, private _ActivatedRoute:ActivatedRoute , private _CartService:CartService){}


  checkOut:FormGroup = this._FormBuilder.group({

    details:[''],
    phone:[''],
    city:[''],





  })


ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(parmas) =>{

        this.cartId = parmas.get('id')
        

      }
    })
}


  handelForm():void{


    console.log(this.checkOut.value);

    this._CartService.checkOut(this.cartId ,this.checkOut.value ).subscribe({
      next:(res) =>{
        if(res.status=== "success")
          window.open(res.session.url, '_self')
      }
    })


    
  }
  



}
