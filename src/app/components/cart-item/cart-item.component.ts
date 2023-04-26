import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/Cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent  implements OnInit {
  @Input() data!: Cart;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    
  }

  deleteItem(event: any) {
    const item = (event.target as HTMLElement).parentElement;
    this.cartService.deleteItem((Number)(item?.id));
    window.location.reload();
  }

}
