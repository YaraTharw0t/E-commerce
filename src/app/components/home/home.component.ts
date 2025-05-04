import { Products } from 'src/app/shared/interfaces/products';
import { GetproductsService } from './../../shared/services/getproducts.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
  
})
export class HomeComponent {

  products:Products[]=[]

  constructor(private _GetproductsService:GetproductsService){}
  ngOnInit(): void {

    this._GetproductsService.Product().subscribe({
      next:(response) =>{
        this.products = response.data
        
      }
    })
    
    
  }

}
