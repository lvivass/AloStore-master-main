import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //Variables
  forms!: FormGroup;

  constructor(private el: ElementRef, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  //Metodo de ver contraseña
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
    const type =
      passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
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

  //METODOS PARA EL FORMULARIO / VALIDACIONES/ GUARDAR / CREAR

  //Validaciones
  get emailNoValido() {
    return this.forms.get('email')?.invalid && this.forms.get('email')?.touched;
  }
  get passwordNoValido() {
    return (
      this.forms.get('password')?.invalid && this.forms.get('password')?.touched
    );
  }

  createForm() {
    this.forms = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  salveInf() {
    // Aquí puedes guardar la información del formulario o realizar otras acciones necesarias
    console.log(this.forms.value); // Muestra los valores del formulario en la consola
    console.log('Información guardada');
  }

  // Agrega un método para verificar si el formulario es válido
  isFormValid(): boolean {
    return this.forms.valid;
  }
}
