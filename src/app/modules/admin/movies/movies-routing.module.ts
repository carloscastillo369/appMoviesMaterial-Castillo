import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { UpdateMovieComponent } from './components/update-movie/update-movie.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesPageComponent
  },
  {
    path: 'add',
    component: AddMovieComponent
  },
  {
    path: 'update/:id',
    component: UpdateMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
