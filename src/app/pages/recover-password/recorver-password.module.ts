import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecorverPasswordRoutingModule } from './recorver-password-routing.module';
import { ValidatePasswordComponent } from './validate-password/validate-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    ValidatePasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    RecorverPasswordRoutingModule
  ]
})
export class RecorverPasswordModule { }
