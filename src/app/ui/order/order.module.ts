import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const routes: Routes= [
  {
    path: '',
    component: OrderComponent
  }
]

@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OrderDetailModule,
    SweetAlert2Module.forChild()
  ],
  exports: [
    OrderComponent,
    OrderDetailModule
  ]
})
export class OrderModule { }
