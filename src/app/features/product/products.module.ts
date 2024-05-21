import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetialsComponent } from './components/product-detials/product-detials.component';
import { ProductListComponent } from './components/product-list/product-list.component';


@NgModule({
  declarations: [ProductListComponent, ProductDetialsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
