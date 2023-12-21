import { Component } from '@angular/core';
import { Directive, HostListener, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

 

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


  // @HostListener('click')
  // toggle() {
  //   const passwordInput = this.el.nativeElement.previousElementSibling;
  //   const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  //   passwordInput.setAttribute('type', type);
  //   const icon = this.el.nativeElement.querySelector('i');
  //   if (type === 'text') {
  //     icon.classList.remove('fa-eye-slash');
  //     icon.classList.add('fa-eye');
  //   } else {
  //     icon.classList.remove('fa-eye');
  //     icon.classList.add('fa-eye-slash');
  //   }
  // }
  

 

  @HostListener('input') onInput() {
    const input = this.el.nativeElement;
    const icon = input.nextElementSibling;

    if (input.value === '') {
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  }
  
}
