import { Injectable } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlistItems: Product[] = [];
 
  constructor() { }
  
  addToWishlist(product: Product){
    this.wishlistItems.push(product);
  }

  getWishlisItems(): Product[] {
    return this.wishlistItems;
  }
  deleteItem(index: number){
    this.wishlistItems.splice(index, 1);

  }
}
