import { Injectable } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../cart/services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userOrders!: Product[];

  constructor( private cartService: CartService) { }
  
  addToUserOrders(){
    this.userOrders = this.cartService.getCartItems().slice();
  }

  getUserOrder(){
    return this.userOrders;

  }

}
