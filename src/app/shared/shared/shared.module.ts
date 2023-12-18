import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';



@NgModule({
  declarations: [
   // MenuComponent,
   // FooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],


  exports:[
    //MenuComponent,
   // FooterComponent
  ],
  providers: [provideEnvironmentNgxMask()],
})
export class SharedModule { }



function provideEnvironmentNgxMask(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

