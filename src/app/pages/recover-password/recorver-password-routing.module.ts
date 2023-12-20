import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecoverPasswordComponent } from './recover-password.component';
import { ValidatePasswordComponent } from './validate-password/validate-password.component';
import { RecoverpasswordGuard } from 'src/app/guards/recoverPassword/recoverpassword.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';

 const routes: Routes = [

  { path: '', component: RecoverPasswordComponent,},
    //Asi debe ir con la ruta demGuards implementar 
    // { path: 'validate-password', component: ValidatePasswordComponent,canActivate:[RecoverpasswordGuard]},
  
   { path: 'validate-password', component: ValidatePasswordComponent },
   { path: 'change-password', component: ChangePasswordComponent },
  
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecorverPasswordRoutingModule { }
