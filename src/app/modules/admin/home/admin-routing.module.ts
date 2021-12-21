import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('../users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('../orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('../movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path:'',
    redirectTo:'/admin/users',
    pathMatch: 'full'
  },
  {
    path: '**',//TODO 404 cuando no existe la ruta
    redirectTo: '/admin/users'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
