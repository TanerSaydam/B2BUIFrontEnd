import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {
    path: '',
    component : LayoutsComponent
  }
]


@NgModule({
  declarations: [
    LayoutsComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule,
    RouterModule.forChild(routes)
  ]
})
export class LayoutsModule { }
