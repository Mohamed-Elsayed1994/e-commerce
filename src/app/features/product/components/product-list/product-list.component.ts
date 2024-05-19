import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../../shared/models/product.model';
import { CartService } from '../../../cart/services/cart.service';
import { WishlistService } from '../../../cart/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  alert: boolean = false;
  alert0: boolean = false;

 
  constructor(private productService: ProductService,
              private cartService: CartService,
              private wishlistService: WishlistService){

  }

  ngOnInit(){
    this.products = this.productService.getAllProducts();
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
