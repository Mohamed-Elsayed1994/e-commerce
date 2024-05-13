import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product.model';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-detials',
  templateUrl: './product-detials.component.html',
  styleUrl: './product-detials.component.css'
})
export class ProductDetialsComponent implements OnInit {
product!: Product;
id!: number;
popularProducts: Product[] = [];

constructor(private route: ActivatedRoute,
            private productService: ProductService,
          private router: Router){
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
  
}

