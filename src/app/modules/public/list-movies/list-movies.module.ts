import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMoviesRoutingModule } from './list-movies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ListMoviesPageComponent } from './pages/list-movies-page/list-movies-page.component';


@NgModule({
  declarations: [
    ListMoviesPageComponent
  ],
  imports: [
    CommonModule,
    ListMoviesRoutingModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class ListMoviesModule { }
