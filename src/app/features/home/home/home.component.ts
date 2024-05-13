import { Component } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../../product/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  popularProducts: Product[] = [];
  dailyBestSells: Product[] = [];

  constructor(private productService: ProductService,private router: Router){
    this.popularProducts = this.productService.getPopularProducts();
    this.dailyBestSells = this.productService.getDailyBestSells();

  }
goToProduct(index:number){
  this.router.navigate(['/products', index]);

}
}
