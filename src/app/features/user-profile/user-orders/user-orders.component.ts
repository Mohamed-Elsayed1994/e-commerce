import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { UserService } from '../../user/services/user.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrl: './user-orders.component.css'
})
export class UserOrdersComponent implements OnInit {
  userOrders!: Product[];


  constructor(private userService: UserService) {}


  ngOnInit(): void {
    this.userOrders = this.userService.getUserOrder();
  }


}
