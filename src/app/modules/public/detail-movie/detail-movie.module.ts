import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailMovieRoutingModule } from './detail-movie-routing.module';
import { DetailMoviePageComponent } from './pages/detail-movie-page/detail-movie-page.component';


@NgModule({
  declarations: [
    DetailMoviePageComponent
  ],
  imports: [
    CommonModule,
    DetailMovieRoutingModule
  ]
})
export class DetailMovieModule { }
