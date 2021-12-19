import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartMovieModel } from 'src/app/core/models/cartmovie.model';
import { MovieModel } from 'src/app/core/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartArrayMovies: CartMovieModel[] = [];
  cartMoviesList = new BehaviorSubject<any>([]);

  constructor() { }

  getCartMoviesList(){
    return this.cartMoviesList.asObservable();
  }

  addMovieToCart(product: MovieModel, price:number, type: string){
    const filter = this.cartArrayMovies.filter((i:any) => i.id == product.id);
      if(filter.length == 0){
        this.cartArrayMovies.push(
          new CartMovieModel(
            product.id, 
            product.title,
            product.posterimg,
            product.year,
            product.runtime,
            type,
            price
          )
        );
      } else if(filter.length == 1){
        this.cartArrayMovies = this.cartArrayMovies.filter((i:any) => i.id != product.id);
        this.cartArrayMovies.push(
          new CartMovieModel(
            product.id, 
            product.title,
            product.posterimg,
            product.year,
            product.runtime,
            type,
            price
          )
        );
      }
    this.cartMoviesList.next(this.cartArrayMovies);
  }

  getTotalPrice(){
    let total = 0;
    this.cartArrayMovies.map((i:any) => {
      total += i.price, 10;
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
