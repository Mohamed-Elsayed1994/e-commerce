import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../../features/cart/services/cart.service';
import { WishlistService } from '../../../features/cart/services/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  cartItems!: Product[];
  wishlistItems: Product[] = [];

  constructor(private cartService: CartService, private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.wishlistItems = this.wishlistService.getWishlisItems();
  }

}
