import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [UserOrdersComponent, ProfileComponent, PaymentComponent, SettingsComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
