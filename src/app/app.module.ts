import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './info/components/about/about.component';
import { ContactComponent } from './info/components/contact/contact.component';
import { HomeComponent } from './features/home/home/home.component';
import { ProductListComponent } from './features/product/components/product-list/product-list.component';
import { ProductDetialsComponent } from './features/product/components/product-detials/product-detials.component';
import { CartComponent } from './features/cart/components/cart/cart.component';
import { CheckoutComponent } from './features/cart/components/checkout/checkout.component';
import { WishlistComponent } from './features/cart/components/wishlist/wishlist.component';
import { RecipeListComponent } from './features/recipes/components/recipe-list/recipe-list.component';
import { RecpeDetialsComponent } from './features/recipes/components/recpe-detials/recpe-detials.component';
import { LoginComponent } from './features/user/components/login/login.component';
import { SignupComponent } from './features/user/components/signup/signup.component';
import { ProfileComponent } from './features/user/components/profile/profile.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetialsComponent,
    CartComponent,
    CheckoutComponent,
    WishlistComponent,
    RecipeListComponent,
    RecpeDetialsComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
