import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { MovieModel } from 'src/app/core/models/movie.model';

import { CartService } from 'src/app/modules/public/cart/services/cart.service';
import { ApiMovieService } from 'src/app/modules/public/detail-movie/services/api-movie.service';

import { ModalTrailerComponent } from '../modal-trailer/modal-trailer.component';


@Component({
  selector: 'app-buttons-function',
  templateUrl: './buttons-function.component.html',
  styleUrls: ['./buttons-function.component.css']
})
export class ButtonsFunctionComponent implements OnInit {

  @Input() movie!:MovieModel;

  public modal:string = "modal";

  constructor(
    private _cartService: CartService,
    private _apiMovieService: ApiMovieService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  buyMovie(id: string){
    this._apiMovieService.getMovie(id).subscribe((res: MovieModel) => {
        this._cartService.addMovieToCart(res, res.purchaseprice, 'compra');
    });   
  }

  rentMovie(id: string){
    this._apiMovieService.getMovie(id).subscribe((res: MovieModel) => {
        this._cartService.addMovieToCart(res, res.rentalprice, 'renta');
    });   
  }

  openDialog(movie: MovieModel){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =  true;
    dialogConfig.data = movie;
    
    this.dialog.open(ModalTrailerComponent, dialogConfig);
  }

}
