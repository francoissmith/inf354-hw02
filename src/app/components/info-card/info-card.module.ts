import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InfoCardComponent } from './info-card.component';



@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [InfoCardComponent],
  exports: [InfoCardComponent]
})
export class InfoCardModule { }
