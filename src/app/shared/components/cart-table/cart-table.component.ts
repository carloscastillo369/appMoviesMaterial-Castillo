import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

import { CartMovieModel } from 'src/app/core/models/cartmovie.model';

import { CartService } from 'src/app/modules/public/cart/services/cart.service';


@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent implements OnInit {

  cartMovies: CartMovieModel[] = [];

  @ViewChild(MatTable) table!: MatTable<any>;
  displayedColumns: string[] = ['posicion','descripcion', 'accion','tipo','precio'];

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this._cartService.getCartMoviesList()
    .subscribe((res: CartMovieModel[]) => {
      this.cartMovies = res;
    })
  }

  deleteCartItem(product: CartMovieModel){
    this._cartService.deleteCartItem(product);
    this.table.renderRows();
  }

  removeAllCart(){
    this._cartService.removeAllCart();
  }


}
