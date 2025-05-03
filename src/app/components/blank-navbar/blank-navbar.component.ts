import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blank-navbar',
  templateUrl: './blank-navbar.component.html',
  styleUrls: ['./blank-navbar.component.css']
})
export class BlankNavbarComponent {
  constructor(private _router: Router){}
  siginOut():void {

localStorage.removeItem('token')
this._router.navigate(['login'])


  }
  

}
