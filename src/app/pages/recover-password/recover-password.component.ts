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
      text: 'Bienvenido a nuestra página. Para continuar, por favor regístrate o inicia sesión.',
      icon: 'info',
      confirmButtonText: 'Aceptar'
    });
    
  }

}
