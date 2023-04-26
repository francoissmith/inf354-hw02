 import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  data = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
  this.cartService.getCarts().subscribe((cart:any) => { this.data = cart; console.log(this.data); })
  }
}
