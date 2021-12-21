import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NewUserModel } from 'src/app/core/models/newuser.model';
import { UsersService } from 'src/app/modules/admin/users/services/users.service';
import { SnackBarComponent } from 'src/app/shared/components/snack-bar/snack-bar.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  patternEmail = /^[0-9a-zA-Z._-]+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/;
  patternPassword = /^[0-9a-zA-Zñ]+$/;

  hide: boolean = true;

  duration: number = 3;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';

  constructor(
    private fb:FormBuilder,
    private _usersService: UsersService,
    private _authService: AuthService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  formSignIn: FormGroup = this.fb.group({
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
      ]]
  }) 
  
  isValidField (field:string){
    return this.formSignIn.get(field)?.valid;
  }

  isInvalidField (field:string) {
    return (
      this.formSignIn.get(field)?.invalid && 
      (this.formSignIn.get(field)?.dirty || this.formSignIn.get(field)?.touched)
    )
  }

  onResetForm(){
    this.formSignIn.reset();
  }

  onSaveForm(){
    if(this.formSignIn.valid){
      const dataForm = this.formSignIn.value;
      this._usersService.getUsers().subscribe(res => {      
        const finder = res.filter((i:any) => i.email == dataForm.email && i.password == dataForm.password);
        
        if(dataForm.email == "admin@correo.pe" && dataForm.password == "Admin22"){
          this._router.navigate(['/admin'])
        } else if(finder.length > 0) {
          this._authService.logInUser(finder);
          this._snackBar.openFromComponent( SnackBarComponent, {
            data: `Bienvenido: ${finder[0].name}!`,
            duration: this.duration*1000,
            verticalPosition: this.verticalPosition,
            horizontalPosition: this.horizontalPosition,
            panelClass: 'success'
          })
          this._router.navigate(['/HomeMovie/movies'])
        } else {
          this._snackBar.openFromComponent( SnackBarComponent, {
            data: 'Email o contraseña incorrectos',
            duration: this.duration*1000,
            verticalPosition: this.verticalPosition,
            horizontalPosition: this.horizontalPosition,
            panelClass: 'error'
          })
        }
      })
      this.onResetForm()
    }
  }

  getErrorMessage (field:string) {
    let message;

    if (this.formSignIn.get(field)?.errors?.required) {
      switch(field) {
        case 'email':
          message = 'Por favor, ingrese su dirección de correo electrónico.';
          break;
        case 'password':
          message = 'Por favor, ingrese su contraseña.';
          break;
      }
    } else if (this.formSignIn.get(field)?.errors?.pattern) {
      switch(field) {
        case 'email':
          message = 'Por favor, ingrese una dirección de correo electrónico válida (p.e. someone@example.com).';
          break;
        case 'password':
          message = 'Formato incorrecto, ingrese solo letras y números.';
          break;
      }
    } else if (this.formSignIn.get(field)?.hasError('minlength')) {
      const minLength = this.formSignIn.get(field)?.errors?.minlength.requiredLength;
      message = `La contraseña debe tener mínimo ${minLength} caracteres`
    } else if (this.formSignIn.get(field)?.hasError('maxlength')) {
      const maxLength = this.formSignIn.get(field)?.errors?.maxlength.requiredLength;
      message = `La contraseña no debe exceder más de ${maxLength} caracteres`
    } 

    return message;
  }

}
