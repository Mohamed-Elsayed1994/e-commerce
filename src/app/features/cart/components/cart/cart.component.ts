import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems!: Product[];
  totalPrice!: number;
  subtotal: number = 0;
  serviceFee: number = 0;


  constructor(private cartService: CartService) {}


  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalPrice();
    
   
  }

  updateTotalPrice(): void {
    this.totalPrice = this.cartService.getTotalPrice();
    if(this.cartItems.length > 0){
      this.serviceFee = 21;
      this.subtotal = this.totalPrice + this.serviceFee
    }else{
      this.serviceFee = 0;
      this.subtotal = 0;
    }
  }

  onDeleteItem(index: number): void {
    this.cartService.deleteItem(index);
    this.loadCart();
  }

}
