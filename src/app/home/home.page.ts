import {  Component, OnInit } from '@angular/core';
import { HomeService} from '../services/home.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  data = [];
  constructor(private homeService: HomeService, private cartService: CartService) { }

  ngOnInit(): void {
    this.homeService.getRestaurants().subscribe((restaurants:any) => { this.data = restaurants; console.log(this.data); });
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
}



