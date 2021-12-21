import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyordersRoutingModule } from './myorders-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { MyordersPageComponent } from './pages/myorders-page/myorders-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MyordersPageComponent
  ],
  imports: [
    CommonModule,
    MyordersRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class MyordersModule { }
