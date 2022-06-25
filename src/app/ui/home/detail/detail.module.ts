import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { Routes } from '@angular/router';

const routes: Routes=[
  {
    path : '',
    component : DetailComponent
  }
]

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DetailComponent
  ]
})
export class DetailModule { }
