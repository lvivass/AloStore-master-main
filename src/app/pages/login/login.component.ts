import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // password: string = '';
  // showPassword: boolean = false;

  // togglePasswordVisibility() {
  //   this.showPassword = !this.showPassword;
  // }


   //Logica para ver la contraseña en el input
   constructor(private el: ElementRef) {}
   onTogglePassword(type: string) {
     const input = document.getElementById(type) as HTMLInputElement;
     if (input !== null) {
       if (input.type === 'password') {
         input.type = 'text';
       } else {
         input.type = 'password';
       }
     }
   }
 
 
   @HostListener('click')
   toggle() {
     const passwordInput = this.el.nativeElement.previousElementSibling;
     const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
     passwordInput.setAttribute('type', type);
     const icon = this.el.nativeElement.querySelector('i');
     if (type === 'text') {
       icon.classList.remove('fa-eye-slash');
       icon.classList.add('fa-eye');
     } else {
       icon.classList.remove('fa-eye');
       icon.classList.add('fa-eye-slash');
     }
   }

}
