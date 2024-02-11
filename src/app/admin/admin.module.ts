import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from '../shared/admin-header/admin-header.component';
import { AdminFooterComponent } from '../shared/admin-footer/admin-footer.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminFooterComponent
  ],
  imports: [
    CommonModule,
  ], exports: [
    AdminComponent,
  ]
})
export class AdminModule { }
