import { Products } from 'src/app/shared/interfaces/products';
import { GetproductsService } from './../../shared/services/getproducts.service';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
  
})
export class HomeComponent {



  searchTerm:string='';

  products:Products[]=[];

  categories:any[]=[];

  categoryOptions: OwlOptions = {
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
  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
     items:1,
    nav: true
  }




  constructor(private _GetproductsService:GetproductsService, private _CartService:CartService, private _ToastrService:ToastrService){}
  ngOnInit(): void {
      //all products
    this._GetproductsService.Product().subscribe({
      next:(response) =>{
        this.products = response.data
        
        
        
      }
    });
      //secound slider
      this._GetproductsService.getCategory().subscribe({
        next:(res) =>{
    this.categories  = res.data
    
    
    
          

        }
      })
    
    
  }
//add to cart
  addCart(id:string):void{
    this._CartService.addToCart(id).subscribe({
      next:(res)=>{
        this._CartService.cartNumber.next(res.numOfCartItems)
        this._ToastrService.success(res.message)
      },
       error:(err)=>{
          console.log(err);
          
        }
    })

  }

}
