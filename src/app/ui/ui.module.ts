import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './layouts/layouts.module';
import { HomeModule } from './home/home.module';
import { OrderModule } from './order/order.module';
import { BasketModule } from './basket/basket.module';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutsModule,
    HomeModule,
    OrderModule,
    BasketModule,
    LoginModule
  ],
  exports: [
    LayoutsModule,
    HomeModule,
    OrderModule,
    BasketModule,
    LoginModule
  ]
})
export class UiModule { }
