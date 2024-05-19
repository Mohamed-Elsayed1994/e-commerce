import { Injectable } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] =[
    new Product(1, 'Apples', 'Fresh apples packed with nutrients.', 30, 'assets/images/products/1.jpg', ['Fruits'], [], true, 100, 4.8),
    new Product(2, 'Almonds', 'Organic raw almonds.', 40,'assets/images/products/2.jpg' , ['Nuts'], ['healthy', 'organic'], true, 200, 4.7),
    new Product(3, 'Bread', 'Whole grain bread.', 20, 'assets/images/products/3.jpg', ['Bakery'], ['whole grain'], true, 80, 4.6),
    new Product(4, 'Carrots', 'Organic carrots perfect for juicing.', 8, 'assets/images/products/4.jpg', ['Vegetables'], ['organic'], true, 150, 4.9),
    new Product(5, 'Dark Chocolate', '90% dark chocolate bar.', 52, 'assets/images/products/5.jpg', ['Sweets'], ['vegan'], true, 75, 4.5),
    new Product(6, 'Eggs', 'Free-range eggs.', 100, 'assets/images/products/6.jpg', ['Dairy'], [], true, 100, 4.4),
    new Product(7, 'Feta Cheese', 'Organic feta cheese.', 75, 'assets/images/products/7.jpg', ['Dairy'], ['organic'], true, 50, 4.8),
    new Product(8, 'Grapes', 'Seedless green grapes.', 60, 'assets/images/products/8.jpg', ['Fruits'], [], true, 120, 4.7),
    new Product(9, 'Honey', 'Pure natural honey.', 120, 'assets/images/products/9.jpg', ['Sweeteners'], ['natural'], true, 90, 4.9),
    new Product(10, 'Ice Cream', 'Vanilla ice cream.', 35, 'assets/images/products/10.jpg', ['Desserts'], ['frozen'], true, 60, 4.3),
    /*new Product(11, 'Jam', 'Strawberry jam.', 3.99, 'https://source.unsplash.com/1600x900/?jam', ['Breakfast'], ['sweet'], true, 85, 4.6),
    new Product(12, 'Kale', 'Fresh kale leaves.', 2.99, 'https://source.unsplash.com/1600x900/?kale', ['Vegetables'], ['leafy'], true, 95, 4.7),
    new Product(13, 'Lemons', 'Organic fresh lemons.', 1.99, 'https://source.unsplash.com/1600x900/?lemons', ['Fruits'], ['organic'], true, 150, 4.8),
    new Product(14, 'Mushrooms', 'White button mushrooms.', 3.99, 'https://source.unsplash.com/1600x900/?mushrooms', ['Vegetables'], [], true, 110, 4.9),
    new Product(15, 'Nutella', 'Hazelnut spread.', 5.49, 'https://source.unsplash.com/1600x900/?nutella', ['Breakfast'], ['spread'], true, 75, 4.5),
    new Product(16, 'Olive Oil', 'Extra virgin olive oil.', 10.99, 'https://source.unsplash.com/1600x900/?olive-oil', ['Cooking Essentials'], ['organic'], true, 50, 4.9),
    new Product(17, 'Pasta', 'Italian spaghetti pasta.', 1.99, 'https://source.unsplash.com/1600x900/?pasta', ['Grains'], [], true, 200, 4.4),
    new Product(18, 'Quinoa', 'Organic white quinoa.', 4.99, 'https://source.unsplash.com/1600x900/?quinoa', ['Grains'], ['organic'], true, 90, 4.8),
    new Product(19, 'Rice', 'Basmati rice.', 3.50, 'https://source.unsplash.com/1600x900/?rice', ['Grains'], [], true, 150, 4.6),
    new Product(20, 'Salmon', 'Fresh Atlantic salmon.', 8.99, 'https://source.unsplash.com/1600x900/?salmon', ['Seafood'], ['fresh'], true, 65, 4.9),
    new Product(21, 'Tea', 'Organic green tea.', 5.99, 'https://source.unsplash.com/1600x900/?tea', ['Beverages'], ['organic'], true, 80, 4.7),
    new Product(22, 'Udon Noodles', 'Japanese udon noodles.', 4.99, 'https://source.unsplash.com/1600x900/?udon-noodles', ['Grains'], [], true, 120, 4.5),
    new Product(23, 'Vanilla Extract', 'Pure vanilla extract.', 12.99, 'https://source.unsplash.com/1600x900/?vanilla', ['Cooking Essentials'], [], true, 40, 4.8),
    new Product(24, 'Wheat Flour', 'Whole wheat flour.', 2.49, 'https://source.unsplash.com/1600x900/?wheat-flour', ['Bakery'], ['whole grain'], true, 100, 4.5),
    new Product(25, 'Yogurt', 'Greek yogurt.', 4.50, 'https://source.unsplash.com/1600x900/?yogurt', ['Dairy'], ['healthy'], true, 85, 4.6)
  */];

  constructor() { }
  getAllProducts(): Product[] {
    return this.products;
  }
  getPopularProducts(): Product[] {
    return this.products.slice(0, 5);
    
  }
  getDailyBestSells(): Product[] {
    return this.products.slice(5, 9);
    
  }
  getProduct(index: number){
    return this.products[index];
  }
}
