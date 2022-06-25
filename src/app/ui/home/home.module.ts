import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailModule } from './detail/detail.module';

const routes: Routes=[
  {
    path: '',
    component : HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DetailModule
  ],
  exports: [
    HomeComponent,
    DetailModule
  ]
})
export class HomeModule { }
