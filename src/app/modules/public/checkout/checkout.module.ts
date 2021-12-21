import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';


@NgModule({
  declarations: [
    CheckoutPageComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MaterialModule
  ]
})
export class CheckoutModule { }
