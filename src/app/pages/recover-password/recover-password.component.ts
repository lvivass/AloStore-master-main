import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent  {

  forms!: FormGroup;

  constructor (private fb: FormBuilder){}

  ngOnInit() {
    Swal.fire({
      title: 'Hola',
      text: 'Te informamos que para realizar la recuperacion de contraseña debes estar registrado.',
      icon: 'info',
      confirmButtonText: 'Aceptar'
    });
    
  }

}
