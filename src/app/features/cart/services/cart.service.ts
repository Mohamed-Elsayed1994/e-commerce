import { Injectable } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
 
  constructor() { }
  
  addToCart(product: Product){
    this.cartItems.push(product);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }
  deleteItem(index: number){
    this.cartItems.splice(index, 1);

  }
  getTotalPrice(): number {
    return this.cartItems.reduce((total, product) => total + product.price, 0);
  }
    

}
