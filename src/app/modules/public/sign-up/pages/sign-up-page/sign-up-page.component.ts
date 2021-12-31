import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

import { RegisterService } from 'src/app/modules/public/sign-up/services/register.service';

import { PasswordErrorMatcher, PasswordValidator } from 'src/app/shared/validators/passwordValidators';
import { SnackBarComponent } from 'src/app/shared/components/snack-bar/snack-bar.component';
import { NewUserModel } from 'src/app/core/models/newuser.model';


@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  patternLetters = /^[a-zA-Z ñ]+$/;
  patternEmail = /^[0-9a-zA-Z._-]+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/;
  patternPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,15}$/;

  errorMatcher = new PasswordErrorMatcher();

  hide1: boolean = true;
  hide2: boolean = true;

  duration: number = 3;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';

  constructor(
    private fb:FormBuilder, 
    private _registerService: RegisterService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  formSignUp:FormGroup = this.fb.group({
    name: ['',
      [
        Validators.required,
        Validators.minLength(3), 
        Validators.maxLength(20), 
        Validators.pattern(this.patternLetters)
      ]],
    email: ['',
      [
        Validators.required,
        Validators.pattern(this.patternEmail)
      ]],
    password: ['',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15), 
        Validators.pattern(this.patternPassword)
      ]],
    confirmPassword: ['',
      [
        Validators.required
      ]],
    checkbox: ['', [Validators.requiredTrue]]
  }, {validators: PasswordValidator})

  isValidField (field:string){
    return this.formSignUp.get(field)?.valid;
  }

  isInvalidField (field:string) {
    if( field == 'confirmPassword' ){
      return  this.formSignUp.errors?.misMatch;
    } else {
        return (
          this.formSignUp.get(field)?.invalid && 
          (this.formSignUp.get(field)?.dirty || this.formSignUp.get(field)?.touched)
        )
    }
  }

  onResetForm(){
    this.formSignUp.reset();
  }

  onSaveForm(){
    const newUser: NewUserModel = {
      id: '',
      name: this.formSignUp.value.name,
      email: this.formSignUp.value.email,
      password: this.formSignUp.value.password
    }
    if(this.formSignUp.valid){
      this._registerService.saveUser(newUser)
      .subscribe(res => {
        this.snackBar.openFromComponent( SnackBarComponent, {
          data: "Usuario registrado con éxito!",
          duration: this.duration*1000,
          verticalPosition: this.verticalPosition,
          horizontalPosition: this.horizontalPosition,
          panelClass: 'success'
        })
      });
      this.onResetForm();
    }
  }

  getErrorMessage (field:string) {
    let message;

    if( field == 'confirmPassword' ){
      message = this.formSignUp.errors?.misMatch? 'Las contraseñas no coinciden' : null;
    } else {
        if (this.formSignUp.get(field)?.errors?.required) {
          switch(field) {
            case 'name':
              message = 'Por favor, ingrese su nombre.';
              break;
            case 'email':
              message = 'Por favor, ingrese su dirección de correo electrónico.';
              break;
            case 'password':
              message = 'Por favor, ingrese su contraseña.';
              break;
            case 'checkbox':
              message = 'Debe aceptar los términos y condiciones.';
              break;
          }
        }  else if (this.formSignUp.get(field)?.hasError('minlength')) {
          const minLength = this.formSignUp.get(field)?.errors?.minlength.requiredLength;
          message = `Ingrese mínimo ${minLength} caracteres`
        } else if (this.formSignUp.get(field)?.hasError('maxlength')) {
          const maxLength = this.formSignUp.get(field)?.errors?.maxlength.requiredLength;
          message = `Ingrese máximo ${maxLength} caracteres`
        } else if (this.formSignUp.get(field)?.errors?.pattern) {
          switch(field) {
            case 'name':
              message = 'Formato incorrecto, ingrese solo letras';
              break;
            case 'email':
              message = 'Por favor, ingrese una dirección de correo electrónico válida (p.e. someone@example.com).';
              break;
            case 'password':
              message = 'Para mayor seguridad el password debe estar formado por letras mayúsculas, minúsculas y números';
              break;
          }
        }     
    }
    return message; 
  }

}
