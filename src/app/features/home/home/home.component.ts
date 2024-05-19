import { Component } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../../product/services/product.service';
import { Router } from '@angular/router';
import { CartService } from '../../cart/services/cart.service';
import { WishlistService } from '../../cart/services/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  popularProducts: Product[] = [];
  dailyBestSells: Product[] = [];

  constructor(private productService: ProductService, 
              private router: Router,
              private cartService: CartService,
              private wishlistService: WishlistService
             ){
    this.popularProducts = this.productService.getPopularProducts();
    this.dailyBestSells = this.productService.getDailyBestSells();

  }
goToProduct(index:number){
  this.router.navigate(['/products', index]);

  } 
  onAddToCart(product: Product){
    this.cartService.addToCart(product);
    product.addedToCart = true;
    setTimeout(() => {
      product.addedToCart = false;
    }, 500); 

  }
  onAddToWishlist(product: Product){
    this.wishlistService.addToWishlist(product);
    product.addedToWishlist = true;
    setTimeout(() => {
      product.addedToWishlist = false;
    }, 500);

  }
}
