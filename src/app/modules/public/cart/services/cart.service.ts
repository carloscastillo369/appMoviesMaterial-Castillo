import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CartMovieModel } from 'src/app/core/models/cartmovie.model';
import { MovieModel } from 'src/app/core/models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartArrayMovies: CartMovieModel[] = [];
  cartMoviesList = new BehaviorSubject<CartMovieModel[]>([]);

  constructor() { }

  getCartMoviesList(){
    return this.cartMoviesList.asObservable();
  }

  addMovieToCart(product: MovieModel, price:number, type: string){
    const cartItem:CartMovieModel = {
      id: product.id, 
      title: product.title,
      image: product.posterimg,
      year: product.year,
      runtime: product.runtime,
      type: type,
      price: price
    }
    const filter = this.cartArrayMovies.filter((i:any) => i.id == product.id);
      if(filter.length == 0){
        this.cartArrayMovies.push(cartItem);
      } else if(filter.length == 1){
        this.cartArrayMovies = this.cartArrayMovies.filter((i:any) => i.id != product.id);
        this.cartArrayMovies.push(cartItem);
      }
    this.cartMoviesList.next(this.cartArrayMovies);
  }

  getTotalPrice(){
    let total = 0;
    this.cartArrayMovies.map((i:any) => {
      total += i.price;
    })
    return total;
  }

  deleteCartItem(product: CartMovieModel){
    this.cartArrayMovies.map((i:any, index:any)=>{
      if(product.id == i.id){
        this.cartArrayMovies.splice(index,1);
      }
    })
    this.cartMoviesList.next(this.cartArrayMovies);
  }

  removeAllCart(){
    this.cartArrayMovies = [];
    this.cartMoviesList.next(this.cartArrayMovies);
  }
}
