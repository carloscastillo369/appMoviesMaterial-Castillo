import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from 'src/app/shared/components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () => import('../list-movies/list-movies.module').then(m => m.ListMoviesModule)
  },
  {
    path: 'detailmovie/:id/:movieTitle',
    loadChildren: () => import('../detail-movie/detail-movie.module').then(m => m.DetailMovieModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('../cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('../sign-in/sign-in.module').then(m => m.SignInModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('../sign-up/sign-up.module').then(m => m.SignUpModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('../checkout/checkout.module').then(m => m.CheckoutModule)
  },
  {
    path: 'myorders',
    loadChildren: () => import('../myorders/myorders.module').then(m => m.MyordersModule)
  },
  {
    path:'',
    redirectTo:'/HomeMovie/movies',
    pathMatch: 'full'
  },
  {
    path: '**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
