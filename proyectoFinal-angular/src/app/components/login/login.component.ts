import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { State } from '../state/state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);

  constructor(public state: State, private router: Router) {}  
  loginForm = this.formBuilder.group({
    userName: ['', [Validators.required, Validators.minLength(2)]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  })

  submit(){
    //console.log(this.loginForm.valid);
    if(!this.loginForm.valid){return}
    console.log(this.loginForm.getRawValue().userName);
    this.state.user = this.loginForm.getRawValue().userName;

    if (this.loginForm.valid) {

      const usuario = this.loginForm.getRawValue().userName;      ;
      const password = this.loginForm.getRawValue().password;
      ;
      console.log(usuario)
      if(usuario === '678' && password === '1234') {
        console.log('Loggin');
        this.state.user = usuario;
        this.router.navigate(['/dashboard']);
      }
    } 
  }
}
