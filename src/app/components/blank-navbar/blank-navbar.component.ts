import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-blank-navbar',
  templateUrl: './blank-navbar.component.html',
  styleUrls: ['./blank-navbar.component.css']
})
export class BlankNavbarComponent {
  constructor(private _router: Router , private _CartService:CartService, private _AuthService:AuthService){}

  

  



  
  siginOut():void {

    this._AuthService.logOut()


  }



  

}
