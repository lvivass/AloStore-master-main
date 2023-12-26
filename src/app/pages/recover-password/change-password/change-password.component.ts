import { Component } from '@angular/core';
import { Directive, HostListener, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';




@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

    //Variables
    forms!: FormGroup;
    password1: string = '';
    password2: string = '';
 

  constructor(private el: ElementRef, private fb: FormBuilder) {
    this.createFormulario();
  }


  //Metodo que evalua si se ha escrito algo en el input de contraseña
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


  //Accion de mostrar y cerrar el boton de OJO/ contraseña
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


  //Validaciones del formulario

  get password1NoValido() {
    return (
      this.forms.get('password1')?.invalid && this.forms.get('password1')?.touched
    );
  }
  get password2NoValido() {
    return (
      this.forms.get('password2')?.invalid && this.forms.get('password2')?.touched
    );
  }


  //Aqui se crea el formulario
  createFormulario() {
    this.forms = this.fb.group({
      password1: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
      password2: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
    }, 
    {
      validator:this.equalPassword('password1', 'password2'),
    }
    
    );
  }


  //Metodo que guarda la informacion del formulario
    // Aquí puedes guardar la información del formulario o realizar otras acciones necesarias
    passwordSalve() {
      console.log(this.forms.value); 
      this.passNovali(); //Metodo que valida que ambas contraseñan sean iguales
      //si el formulario es inválido, el método marca como tocados todos los controles del formulario que no son válidos, para que se muestren los mensajes de error correspondientes en la vista.
      if( this.forms.invalid){
        return Object.values(this.forms.controls).forEach(control =>{
          control.markAsTouched();
        })
      }
    }
  
    //Valida que ambas contraseñan sean iguales
    equalPassword(pass1Name: string, pass2Name: string){
    return(FormGroup: FormGroup)=>{
      const pass1Control = FormGroup.get(pass1Name);
      const pass2Control = FormGroup.get(pass2Name);

      if( pass1Control?.value === pass2Control?.value){
        pass2Control?.setErrors(null);
      } else{
        pass2Control?.setErrors({noMatch : true});
      }
    }
  }
 
  passNovali(){
    const pass1 = this.forms.get('password1')?.value;
    const pass2 = this.forms.get('password2')?.value;

    if( pass1 !== pass2){
      return true;
    }else{
      return false;
    }
  }



  
}
