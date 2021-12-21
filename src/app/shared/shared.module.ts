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
import { CartTableComponent } from './components/cart-table/cart-table.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    ButtonsFunctionComponent,
    CardMovieComponent,
    CartWidgetComponent,
    FooterComponent,
    ModalTrailerComponent,
    NavbarComponent,
    CartTableComponent,
    CartSummaryComponent,
    SnackBarComponent,
    OrdersTableComponent,
    PagenotfoundComponent
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
    NavbarComponent,
    CartTableComponent,
    CartSummaryComponent,
    SnackBarComponent,
    OrdersTableComponent
  ]
})
export class SharedModule { }
