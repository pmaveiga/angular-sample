import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRegisterComponent } from './profile-register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileRegisterComponent],
  exports: [ProfileRegisterComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class ProfileRegisterModule { }
