import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('f', { static: false })
  loginForm!: NgForm;

  onSubmit(form: NgForm){
    this.loginForm = form.value;
  }


}
