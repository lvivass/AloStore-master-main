import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule,
    RecorverPasswordRoutingModule
  ]
})
export class RecorverPasswordModule { }
