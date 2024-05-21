import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { AboutComponent } from './info/components/about/about.component';
import { ContactComponent } from './info/components/contact/contact.component';
import { CartComponent } from './features/cart/components/cart/cart.component';
import { WishlistComponent } from './features/cart/components/wishlist/wishlist.component';
import { CheckoutComponent } from './features/cart/components/checkout/checkout.component';
import { ForgotPasswordComponent } from './features/user/components/forgot-password/forgot-password.component';
import { LoginComponent } from './features/user/components/login/login.component';
import { SignupComponent } from './features/user/components/signup/signup.component';
import { authGuard } from './features/user/auth-guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'home', component: HomeComponent},
  {path: 'products', loadChildren: () => import('./features/product/products.module').then(m => m.ProductsModule)},
  {path: 'recipes', loadChildren: () => import('./features/recipes/recipes.module').then(m => m.RecipesModule)},
  {path: 'profile', loadChildren: () => import('./features/user-profile/user-profile.module').then(m => m.UserProfileModule)},
  {path: 'login' , component: LoginComponent},
  {path: 'signup' , component: SignupComponent},
  {path: 'forgot-password' , component: ForgotPasswordComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'cart' , component: CartComponent},
  {path: 'checkout' , canActivate: [authGuard], component: CheckoutComponent},
  {path: 'wishlist' , component: WishlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Scroll to top
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
