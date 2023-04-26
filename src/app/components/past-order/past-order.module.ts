import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastOrderComponent } from './past-order.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [PastOrderComponent],
  exports:[PastOrderComponent]
})
export class PastOrderModule { }
