import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  @ViewChild('f', { static: false })
  forgotForm!: NgForm;

  onSubmit(form: NgForm){
    this.forgotForm = form.value;
  }

}
