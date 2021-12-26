import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';



@NgModule({
  declarations: [
    AdminPageComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class AdminModule { }
