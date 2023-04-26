import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CheckoutComponent } from './checkout.component';



@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [CheckoutComponent],
  exports: [CheckoutComponent],
})
export class CheckoutModule { }
