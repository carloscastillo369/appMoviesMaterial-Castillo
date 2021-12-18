import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
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
  @ViewChild('asTrailer', {static: true}) trailer!: ElementRef;

  constructor(
    private cartService: CartService, 
    private renderer2: Renderer2,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addMovie(product: MovieModel, price: number, type: string){
    this.cartService.addMovieToCart(product, price, type);    
  }

  openModalTrailer(urlTrailer: string){
    this.modal = "modal d-block";
    const trailer = this.trailer.nativeElement;
    this.renderer2.setAttribute(trailer,'src', urlTrailer)
  }

  closeModalTrailer(){
    this.modal = "modal"; 
    const trailer = this.trailer.nativeElement;
    this.renderer2.setAttribute(trailer,'src',"")
  }

  openDialog(movie: MovieModel){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =  true;
    dialogConfig.data = movie;
    
    this.dialog.open(ModalTrailerComponent, dialogConfig);
  }

}
