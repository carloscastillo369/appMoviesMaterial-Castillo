import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { UsersPageComponent } from './pages/users-page/users-page.component';
import { OrderUserComponent } from './components/order-user/order-user.component';


@NgModule({
  declarations: [
    UsersPageComponent,
    OrderUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule
  ]
})
export class UsersModule { }
