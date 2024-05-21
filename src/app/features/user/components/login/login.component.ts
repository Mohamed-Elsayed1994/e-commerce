import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private userService: UserService,
              private router:Router){}

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>;
    this.isLoading = true;

    this.userService.login(email, password).subscribe({
      next: (v) => {
        this.isLoading = false;
        this.router.navigate(['./checkout']);
    },
      error: (errorMessage) =>{
        this.error = errorMessage;
        this.isLoading = false;
      }
   });

  form.reset();

  }
  onHandelError(){
    this.error = null;
  }

}
