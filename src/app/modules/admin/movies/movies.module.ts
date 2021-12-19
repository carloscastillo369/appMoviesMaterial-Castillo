import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MaterialModule } from '../../../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { UpdateMovieComponent } from './components/update-movie/update-movie.component';


@NgModule({
  declarations: [
    MoviesPageComponent,
    AddMovieComponent,
    UpdateMovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class MoviesModule { }
