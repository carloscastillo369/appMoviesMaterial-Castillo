import { Component, OnInit } from '@angular/core';

import { CartMovieModel } from 'src/app/core/models/cartmovie.model';

import { CartService } from 'src/app/modules/public/cart/services/cart.service';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cartMovies: CartMovieModel[] = [];
  totalPrice:number = 0;

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this._cartService.getCartMoviesList()
    .subscribe((res: CartMovieModel[]) => {
      this.cartMovies = res;
      this.totalPrice = this._cartService.getTotalPrice();
    })
  }

}
