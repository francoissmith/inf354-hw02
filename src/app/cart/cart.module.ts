import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { CartItemModule } from '../components/cart-item/cart-item.module';
import { CheckoutModule } from '../components/checkout/checkout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    CartItemModule,
    CheckoutModule
  ],
  declarations: [CartPage]
})
export class CartPageModule { }
