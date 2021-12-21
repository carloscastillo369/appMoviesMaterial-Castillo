import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/public/sign-in/services/auth.service';
import { CartService } from 'src/app/modules/public/cart/services/cart.service';
import { CheckoutService } from 'src/app/modules/public/checkout/services/checkout.service';
import { NewUserModel } from 'src/app/core/models/newuser.model';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  user!:NewUserModel;
  orders:any[] = [];
  totalPrice: number = 0;

  displayedColumns: string[] = ['posicion','descripcion','tipo','precio'];

  constructor(
    private _authService: AuthService,
    private _cartService: CartService,
    private _checkoutService: CheckoutService
  ) { }

  ngOnInit(): void {
    this._authService.getUserLogIn().subscribe(res => {
      this.user = res[0];
    });
    this._cartService.getCartMoviesList().subscribe(res => {
      this.orders = res;
      this.totalPrice = this._cartService.getTotalPrice();
    })
  }

  payment(){ 
    this._checkoutService.saveOrder({
      id: this.user.id,
      name: this.user.name,
      email: this.user.email,
      orders: this.orders
    })
    .subscribe(res => {
      console.log('pedido realizado');
      
    })
  }

}
