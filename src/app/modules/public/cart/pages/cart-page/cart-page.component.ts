import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/modules/public/cart/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  totalItemsCart: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartMoviesList()
    .subscribe(res => {
      this.totalItemsCart = res.length;
    })
  }

}
