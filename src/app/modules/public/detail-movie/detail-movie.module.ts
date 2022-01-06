import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailMovieRoutingModule } from './detail-movie-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DetailMoviePageComponent } from './pages/detail-movie-page/detail-movie-page.component';



@NgModule({
  declarations: [
    DetailMoviePageComponent
  ],
  imports: [
    CommonModule,
    DetailMovieRoutingModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class DetailMovieModule { }
