import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailModule } from './detail/detail.module';
import { ProductPipe } from './pipe/product.pipe';
import { FormsModule } from '@angular/forms';

const routes: Routes=[
  {
    path: '',
    component : HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    ProductPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DetailModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    DetailModule
  ]
})
export class HomeModule { }
