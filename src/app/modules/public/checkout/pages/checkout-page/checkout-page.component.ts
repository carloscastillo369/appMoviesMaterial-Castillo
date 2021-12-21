import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/public/sign-in/services/auth.service';
import { CartService } from 'src/app/modules/public/cart/services/cart.service';
import { CheckoutService } from 'src/app/modules/public/checkout/services/checkout.service';
import { NewUserModel } from 'src/app/core/models/newuser.model';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/shared/components/snack-bar/snack-bar.component';
import { Router } from '@angular/router';

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

  duration: number = 3;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';

  constructor(
    private _authService: AuthService,
    private _cartService: CartService,
    private _checkoutService: CheckoutService,
    private _snackBar: MatSnackBar,
    private _router: Router
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
      this._snackBar.openFromComponent( SnackBarComponent, {
        data: 'Pedido realizado con éxito!',
        duration: this.duration*1000,
        verticalPosition: this.verticalPosition,
        horizontalPosition: this.horizontalPosition,
        panelClass: 'success'
      })
      this._cartService.removeAllCart();
      this._router.navigate(['/HomeMovie/movies']);
    })
  }

}
