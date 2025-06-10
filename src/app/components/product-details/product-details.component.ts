import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/shared/interfaces/products';
import { GetproductsService } from 'src/app/shared/services/getproducts.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/shared/services/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute, private _GetproductsService:GetproductsService , private _CartService:CartService){
    
  }
  productDetails:Products ={} as Products

 sliderProduct: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false
  }
  
  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe(
      {
        next:(params) =>{

          let idProduct:any = params.get('id')

          this._GetproductsService.getDetails(idProduct).subscribe({
            next:(res) =>{
              this.productDetails = res.data
            }
          })

      
        }
      }
    
    )
      
  }

  addCart(id:string):void{
    this._CartService.addToCart(id).subscribe({
      next:(res) =>{
        // console.log(res);
        this.productDetails =res.data
        
        
      },
      error:(err) =>{
        console.log(err);
        

      }

    })

  }

}
