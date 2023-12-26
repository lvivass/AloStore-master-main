import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  //Variables
  forms!: FormGroup;
  password1: string = '';
  password2: string = '';
  showPassword1: boolean = false;
  showPassword2: boolean = false;


  constructor(private el: ElementRef, private fb: FormBuilder) {

    this.createFormulario();
  }

  ngOnInit(): void {}

  //Metodo que verifica cuando el boton esta abierto o cerrado
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

  //Metodo que acciona el boton de OJO / contraseña
  togglePasswordVisibility(input: string) {
    if (input === 'password1') {
      this.showPassword1 = !this.showPassword1;
    } else if (input === 'password2') {
      this.showPassword2 = !this.showPassword2;
    }
  }
  

  //METODOS PARA EL FORMULARIO / VALIDACIONES/ GUARDAR / CREAR

  //Validaciones
  get nameNoValido() {
    return this.forms.get('name')?.invalid && this.forms.get('name')?.touched;
  } 
  get lastnameNoValido() {
    return this.forms.get('lastname')?.invalid && this.forms.get('lastname')?.touched;
  } 
  get emailNoValido() {
    return this.forms.get('email')?.invalid && this.forms.get('email')?.touched;
  }
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
      name: ['', Validators.required, Validators.pattern(/^[a-zA-ZñÑ\s]*$/)],
      lastname: ['', Validators.required, Validators.pattern(/^[a-zA-ZñÑ\s]*$/)],
      email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
      password1: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
      password2: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
    }, 
    {
      validator:this.passwordEqual('password1', 'password2'),
    }
    
    );
  }

  // Aquí puedes guardar la información del formulario o realizar otras acciones necesarias
  salveInformation() {
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
  passwordEqual(pass1Name: string, pass2Name: string){
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
  
  // Agrega un método para verificar si el formulario es válido
  isFormValid(): boolean {
    return this.forms.valid;
  }

  //Metodo que bloquea ingresar caracteres especiales en el input
  omitSpecialChar(event: KeyboardEvent) {
    const charCode = event.charCode;
    const charStr = String.fromCharCode(charCode);
    const pattern = /^[a-zA-ZñÑ\s]*$/; // Expresión regular que permite solo letras 
  
    if (!pattern.test(charStr)) {
      event.preventDefault(); // Evita que se ingrese el carácter si no cumple con el patrón
    }
  }

}
