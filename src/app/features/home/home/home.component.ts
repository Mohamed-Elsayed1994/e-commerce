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
  alert: boolean = false;
  alert0: boolean = false;


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
    this.alert = true;
    setTimeout(() => {
      product.addedToCart = false;
      this.alert = false;
    }, 700);
  }
  onAddToWishlist(product: Product){
    this.wishlistService.addToWishlist(product);
    product.addedToWishlist = true;
    this.alert0 = true;
    setTimeout(() => {
      product.addedToWishlist = false;
      this.alert0 = false;
    }, 700);

  }
}
