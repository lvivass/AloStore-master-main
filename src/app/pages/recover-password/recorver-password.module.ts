import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecorverPasswordRoutingModule } from './recorver-password-routing.module';
import { ValidatePasswordComponent } from './validate-password/validate-password.component';


@NgModule({
  declarations: [
    ValidatePasswordComponent
  ],
  imports: [
    CommonModule,
    RecorverPasswordRoutingModule
  ]
})
export class RecorverPasswordModule { }
