import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product.model';
import { WishlistService } from '../../services/wishlist.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit {
  wishlistItems: Product[] = [];

  constructor(private wishlistService: WishlistService, private cartService: CartService ){}

  ngOnInit(): void {
    this.wishlistItems = this.wishlistService.getWishlisItems();
  }
  onDeleteItem(index: number): void {
    this.wishlistService.deleteItem(index);
    
  }
  onAddToCart(product: Product){
    this.cartService.addToCart(product);
  }

 
}
