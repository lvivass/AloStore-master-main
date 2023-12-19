import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecoverPasswordComponent } from './recover-password.component';
import { ValidatePasswordComponent } from './validate-password/validate-password.component';
import { RecoverpasswordGuard } from 'src/app/guards/recoverPassword/recoverpassword.guard';

 const routes: Routes = [

  { path: '', component: RecoverPasswordComponent,},
    //Asi debe ir con la ruta demGuards implementar 
    // { path: 'validate-password', component: ValidatePasswordComponent,canActivate:[RecoverpasswordGuard]},
  
   { path: 'validate-password', component: ValidatePasswordComponent },
  
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecorverPasswordRoutingModule { }
