import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';

import { ButtonsFunctionComponent } from './components/buttons-function/buttons-function.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { CartWidgetComponent } from './components/cart-widget/cart-widget.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalTrailerComponent } from './components/modal-trailer/modal-trailer.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    ButtonsFunctionComponent,
    CardMovieComponent,
    CartWidgetComponent,
    FooterComponent,
    ModalTrailerComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    ButtonsFunctionComponent,
    CardMovieComponent,
    CartWidgetComponent,
    FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
