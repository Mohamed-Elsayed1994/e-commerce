import { Injectable } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);
 
  constructor() { }
  
  addToCart(product: Product){
    const exists = this.cartItems.some(item => item.id === product.id);
    if (!exists) {
      this.cartItems.push(product);
      this.cartItemsSubject.next(this.cartItems);
    } 
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }
  deleteItem(index: number){
    this.cartItems.splice(index, 1);

  }
  getTotalPrice(): number {
    return this.cartItems.reduce((total, product) => total + (product.price * product.orderQuantity), 0);
  }
    

}
