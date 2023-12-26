import { Component } from '@angular/core';

@Component({
  selector: 'app-validate-password',
  templateUrl: './validate-password.component.html',
  styleUrls: ['./validate-password.component.scss']
})
export class ValidatePasswordComponent {

  tiempoRestante: number = 120; // 2 minutos en segundos

  ngOnInit() {
    const intervalo = setInterval(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante--;
      } else {
        clearInterval(intervalo);
        // Aquí puedes manejar la lógica de expiración del código
      }
    }, 1000); // Actualizar cada segundo
  }

}
