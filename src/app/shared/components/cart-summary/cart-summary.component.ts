import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartMovieModel } from 'src/app/core/models/cartmovie.model';
import { CartService } from 'src/app/modules/public/cart/services/cart.service';

import { AuthService } from 'src/app/modules/public/sign-in/services/auth.service';


@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  totalPrice!: number;

  constructor(
    private router: Router,
    private _auth: AuthService,
    private _cartService: CartService
  ) { }

  ngOnInit(): void {
    this._cartService.getCartMoviesList()
    .subscribe((res) => {
      this.totalPrice = this._cartService.getTotalPrice();
    })
  }

  goToCheckout(){
    this._auth.getUserLogIn().subscribe(res => {
      if(res.length != 0){
        
        this.router.navigate(['/HomeMovie/checkout'])
      }else {
        this.router.navigate(['/HomeMovie/signin'])
      }
    })
  }

}
