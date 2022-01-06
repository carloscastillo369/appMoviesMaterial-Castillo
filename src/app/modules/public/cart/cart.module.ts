import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CartEmptyComponent } from './components/cart-empty/cart-empty.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    CartPageComponent,
    CartEmptyComponent,
    CartListComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class CartModule { }
