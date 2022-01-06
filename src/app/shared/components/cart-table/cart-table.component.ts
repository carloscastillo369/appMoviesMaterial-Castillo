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

  public cartMovies: CartMovieModel[] = [];
  public displayedColumns: string[] = ['posicion', 'descripcion', 'accion', 'tipo', 'cantidad', 'precio', 'subtotal'];
  
  @ViewChild(MatTable) table!: MatTable<any>;
  
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

  increase( id: string ){
    this._cartService.increaseQtyMovie(id);
  }

  decrease( id: string ){
    this._cartService.decreaseQtyMovie(id);
  }

  MinToHours(number: number){
    const hours = Math.floor(number/60);
    const min = number % 60;
    if(hours > 1){
      return hours + ' ' + 'hrs' + ' ' + min + ' ' + 'min';
    } else {
      return hours + ' ' + 'hr' + ' ' + min + ' ' + 'min';
    }

  }

}
