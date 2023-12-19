import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent  {

  ngOnInit() {
    Swal.fire({
      title: 'Hola',
      text: 'Te informamos que para realizar la recuperacion de contraseña debes estar registrado.',
      icon: 'info',
      confirmButtonText: 'Aceptar'
    });
    
  }

}
