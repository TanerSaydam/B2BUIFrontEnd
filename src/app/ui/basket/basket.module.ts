import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { RouterModule, Routes } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const routes: Routes=[
  {
    path: '',
    component: BasketComponent
  }
]

@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SweetAlert2Module.forChild()
  ],
  exports: [
    BasketComponent
  ]
})
export class BasketModule { }
