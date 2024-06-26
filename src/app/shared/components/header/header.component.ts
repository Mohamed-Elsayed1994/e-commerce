import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../../features/cart/services/cart.service';
import { WishlistService } from '../../../features/cart/services/wishlist.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { UserService } from '../../../features/user/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  cartItems!: Product[];
  wishlistItems: Product[] = [];
  private userSub:Subscription;
  isAuthenticated = false;


  constructor(private cartService: CartService,
              private wishlistService: WishlistService,
              private userService: UserService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.wishlistItems = this.wishlistService.getWishlisItems();
    this.userService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    })
  }
  onLogout(){
    this.userService.logout();
    
   
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
