import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './modules/admin/home/pages/admin-page/admin-page.component';
import { HomePageComponent } from './modules/public/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path:'HomeMovie',
    component: HomePageComponent,
    loadChildren: () => import(`./modules/public/home/home.module`).then(m => m.HomeModule)
  },
  {
    path:'admin',
    component: AdminPageComponent,
    loadChildren: () => import(`./modules/admin/home/admin.module`).then(m => m.AdminModule)
  },
  {
    path:'',
    redirectTo:'/HomeMovie',
    pathMatch: 'full'
  },
  {
    path: '**',//TODO 404 cuando no existe la ruta
    redirectTo: '/HomeMovie'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
