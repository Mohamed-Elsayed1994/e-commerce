import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  @ViewChild('f', { static: false })
  signupForm!: NgForm;

  onSubmit(form: NgForm){
    this.signupForm = form.value;
  }


}
