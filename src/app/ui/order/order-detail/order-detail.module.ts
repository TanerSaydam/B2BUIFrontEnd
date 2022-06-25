import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailComponent } from './order-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {
    path: '',
    component: OrderDetailComponent
  }
]

@NgModule({
  declarations: [
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    OrderDetailComponent
  ]
})
export class OrderDetailModule { }
