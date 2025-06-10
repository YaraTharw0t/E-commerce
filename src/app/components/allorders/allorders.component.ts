import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {


  productsUser:any[] =[]
  constructor( private _CartService:CartService){}


  ngOnInit(): void {      


    const Id= this._CartService.getToken();
    
    
 this._CartService.getAllOrders(Id).subscribe({
  next:(res)=>{
    this.productsUser =res

  },

  error:(err) =>{
    console.log(err);
    

  }

 })



 
  }


}
