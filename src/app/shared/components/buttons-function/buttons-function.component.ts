import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { MovieModel } from 'src/app/core/models/movie.model';

import { CartService } from 'src/app/modules/public/cart/services/cart.service';

import { ModalTrailerComponent } from '../modal-trailer/modal-trailer.component';


@Component({
  selector: 'app-buttons-function',
  templateUrl: './buttons-function.component.html',
  styleUrls: ['./buttons-function.component.css']
})
export class ButtonsFunctionComponent implements OnInit {

  @Input() movie!:MovieModel;

  modal:string = "modal";

  constructor(
    private _cartService: CartService, 
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addMovie(product: MovieModel, price: number, type: string){
    this._cartService.addMovieToCart(product, price, type);    
  }

  openDialog(movie: MovieModel){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =  true;
    dialogConfig.data = movie;
    
    this.dialog.open(ModalTrailerComponent, dialogConfig);
  }

}
