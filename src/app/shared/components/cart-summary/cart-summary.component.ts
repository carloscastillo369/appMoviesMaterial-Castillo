import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/modules/public/sign-in/services/auth.service';


@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  @Input() totalPrice!:number;

  constructor(
    private _router: Router,
    private _auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  goToCheckout(){
    this._auth.getUserLogIn().subscribe(res => {
      if(res.length != 0){
        
        this._router.navigate(['/HomeMovie/checkout'])
      }else {
        this._router.navigate(['/HomeMovie/signin'])
      }
    })
  }

}
