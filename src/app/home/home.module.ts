import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ModalModule } from '../modal/modal.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    ModalModule,
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
