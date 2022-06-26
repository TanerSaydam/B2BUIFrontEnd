import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    CommonModule,
    FormsModule
  ],
  exports: [
    DetailComponent
  ]
})
export class DetailModule { }
