import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListMoviesRoutingModule } from './list-movies-routing.module';
import { ListMoviesPageComponent } from './pages/list-movies-page/list-movies-page.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    ListMoviesPageComponent
  ],
  imports: [
    CommonModule,
    ListMoviesRoutingModule,
    SharedModule
  ]
})
export class ListMoviesModule { }
