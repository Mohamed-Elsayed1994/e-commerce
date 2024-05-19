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
