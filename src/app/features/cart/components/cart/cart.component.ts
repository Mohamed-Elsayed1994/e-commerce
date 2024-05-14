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
  quantity: number = 1;
  totalPrice!: number;


  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }
  onDeleteItem(index: number){
    this.cartService.deleteItem(index);
  }

}
