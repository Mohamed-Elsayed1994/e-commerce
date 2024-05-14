import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../../shared/models/product.model';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
 
  constructor(private productService: ProductService,
              private cartService: CartService){

  }

  ngOnInit(){
    this.products = this.productService.getAllProducts();
  }
  onAddToCart(product: Product){
    this.cartService.addToCart(product);
  }

  

}
