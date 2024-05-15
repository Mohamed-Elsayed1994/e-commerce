import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { ProductListComponent } from './features/product/components/product-list/product-list.component';
import { RecipeListComponent } from './features/recipes/components/recipe-list/recipe-list.component';
import { AboutComponent } from './info/components/about/about.component';
import { ContactComponent } from './info/components/contact/contact.component';
import { RecpeDetialsComponent } from './features/recipes/components/recpe-detials/recpe-detials.component';
import { ProductDetialsComponent } from './features/product/components/product-detials/product-detials.component';
import { CartComponent } from './features/cart/components/cart/cart.component';
import { WishlistComponent } from './features/cart/components/wishlist/wishlist.component';
import { CheckoutComponent } from './features/cart/components/checkout/checkout.component';
import { SignupComponent } from './features/user/components/signup/signup.component';
import { LoginComponent } from './features/user/components/login/login.component';
import { ProfileComponent } from './features/user/components/profile/profile.component';
import { ForgotPasswordComponent } from './features/user/components/forgot-password/forgot-password.component';
import { UserOrdersComponent } from './features/user/components/user-orders/user-orders.component';
import { SettingsComponent } from './features/user/components/settings/settings.component';
import { AddressComponent } from './features/user/components/address/address.component';
import { PaymentComponent } from './features/user/components/payment/payment.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id',component: ProductDetialsComponent},
  {path: 'recipes', component: RecipeListComponent},
  {path: 'recipes/:id',component: RecpeDetialsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'cart' , component: CartComponent},
  {path: 'checkout' , component: CheckoutComponent},
  {path: 'wishlist' , component: WishlistComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'signup' , component: SignupComponent},
  {path: 'forgot-password' , component: ForgotPasswordComponent},
  {path: 'profile' , component: ProfileComponent,
    children: [
      {path: '' , component: UserOrdersComponent},
      {path: 'setting' , component: SettingsComponent},
      {path: 'address' , component: AddressComponent},
      {path: 'payment' , component: PaymentComponent}
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
