import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMoviesRoutingModule } from './list-movies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ListMoviesPageComponent } from './pages/list-movies-page/list-movies-page.component';


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
