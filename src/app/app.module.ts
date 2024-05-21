import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './info/components/about/about.component';
import { ContactComponent } from './info/components/contact/contact.component';
import { HomeComponent } from './features/home/home/home.component';
import { CartComponent } from './features/cart/components/cart/cart.component';
import { CheckoutComponent } from './features/cart/components/checkout/checkout.component';
import { WishlistComponent } from './features/cart/components/wishlist/wishlist.component';
import { LoginComponent } from './features/user/components/login/login.component';
import { SignupComponent } from './features/user/components/signup/signup.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './features/user/components/forgot-password/forgot-password.component';
import { AuthInterceptorService } from './features/user/services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    WishlistComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
