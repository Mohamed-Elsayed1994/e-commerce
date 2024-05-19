import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product.model';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CartService } from '../../../cart/services/cart.service';
import { WishlistService } from '../../../cart/services/wishlist.service';

@Component({
  selector: 'app-product-detials',
  templateUrl: './product-detials.component.html',
  styleUrl: './product-detials.component.css'
})
export class ProductDetialsComponent implements OnInit {
product!: Product;
id!: number;
popularProducts: Product[] = [];
alert: boolean = false;
alert0: boolean = false;

constructor(private route: ActivatedRoute,
            private productService: ProductService,
            private router: Router,
            private cartService: CartService,
            private wishlistService: WishlistService){
    this.popularProducts = this.productService.getPopularProducts();
}
ngOnInit(): void {
  this.route.params.subscribe(
  (params: Params) => {
  this.id = +params['id'];
  this.product = this.productService.getProduct(this.id);
    }
  );
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

