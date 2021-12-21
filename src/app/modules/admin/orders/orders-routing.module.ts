import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderUserComponent } from './components/order-user/order-user.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersPageComponent
  },
  {
    path: 'order/:id',
    component: OrderUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
