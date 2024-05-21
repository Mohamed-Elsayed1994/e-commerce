import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { authGuard } from '../user/auth-guard';

const routes: Routes = [
  {path: '' , component: ProfileComponent, canActivate: [authGuard],
  children: [
    {path: '' , component: UserOrdersComponent},
    {path: 'setting' , component: SettingsComponent},
    {path: 'address' , component: AddressComponent},
    {path: 'payment' , component: PaymentComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
