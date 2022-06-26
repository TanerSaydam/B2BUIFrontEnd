import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { OrderPipe } from './pipe/order.pipe';
import { FormsModule } from '@angular/forms';

const routes: Routes= [
  {
    path: '',
    component: OrderComponent
  }
]

@NgModule({
  declarations: [
    OrderComponent,
    OrderPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OrderDetailModule,
    FormsModule,
    SweetAlert2Module.forChild()
  ],
  exports: [
    OrderComponent,
    OrderDetailModule
  ]
})
export class OrderModule { }
