import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product.model';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../../user/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  cartItems!: Product[];
  userOrders!: Product[];
  totalPrice!: number;
  subtotal: number = 0;
  serviceFee: number = 0;


  constructor(private cartService: CartService,
              private userService: UserService) {}


  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalPrice();
    if(this.cartItems.length > 0){
      this.serviceFee = 21;
      this.subtotal = this.totalPrice + this.serviceFee
    }else{
      this.serviceFee = 0;
      this.subtotal = 0;
    }
   
  }

  updateTotalPrice(): void {
    this.totalPrice = this.cartService.getTotalPrice();
  }
  
  onAddToUserOrder(){
    this.userService.addToUserOrders();
    this.cartItems.length= 0;
  }
}


