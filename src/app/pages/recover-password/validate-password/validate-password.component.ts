import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validate-password',
  templateUrl: './validate-password.component.html',
  styleUrls: ['./validate-password.component.scss']
})
export class ValidatePasswordComponent {
 
  //Variables
  timeLeft: number = 20; // 2 minutos en segundos

  constructor() { }

  ngOnInit() {
    const interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(interval);
        Swal.fire({
          title: "¿Te quedaste sin tiempo?",
          text: "Oprime el botón de reenviar y solicita tu código nuevamente",
          icon: "question"
        });
        
      }
    }, 1000); // Actualizar cada segundo
  }

  restartTimer() {
    this.timeLeft = 20;
  }
}
