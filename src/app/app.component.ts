import { Component, OnInit } from '@angular/core';
import { UserService } from './features/user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.autoLogin();
  }
}
