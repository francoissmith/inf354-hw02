import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { RestaurantImageModule } from '../components/restaurant-image/restaurant-image.module';
import { InfoCardModule } from '../components/info-card/info-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RestaurantImageModule,
    InfoCardModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
