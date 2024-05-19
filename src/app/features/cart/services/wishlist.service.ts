import { Injectable } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlistItems: Product[] = [];
  private wishlistItemsSubject = new BehaviorSubject<Product[]>([]);
 
  constructor() { }
  
  addToWishlist(product: Product){
    const exists = this.wishlistItems.some(item => item.id === product.id);
    if (!exists) {
      this.wishlistItems.push(product);
      this.wishlistItemsSubject.next(this.wishlistItems);
    } 
  }

  getWishlisItems(): Product[] {
    return this.wishlistItems;
  }
  deleteItem(index: number){
    this.wishlistItems.splice(index, 1);

  }
}
