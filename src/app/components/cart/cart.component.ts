import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private _CartService:CartService){}

  cartDeatails:any={}
  cartd:any={}

  removeItem(id:string):void{
    this._CartService.removeCartItem(id).subscribe({
      next:(res) =>{
        this._CartService.cartNumber.next(res.numOfCartItems)
        this.cartDeatails= res.data
      }
    })
  }


  changeCount(id:string,count:number):void{
    if(count>0){


       this._CartService.upDateItem(id,count).subscribe({
      next:(res)=>{
        // console.log(res.data);
        this.cartDeatails = res.data
        

      }
    })
    }
   


  }



ngOnInit(): void {

  this._CartService.getUserCart().subscribe({
    next:(res)=>{
      // console.log(res.data);
      this.cartDeatails= res.data
      this.cartd =res
      
      
    },
    error:(err)=>{
      console.log(err);
      
      
    }
  })
    
}

}
