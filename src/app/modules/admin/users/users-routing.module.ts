import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderUserComponent } from './components/order-user/order-user.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  {
    path: '',
    component: UsersPageComponent
  },
  {
    path: 'user/:id',
    component: OrderUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
