import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-past-order',
  templateUrl: './past-order.component.html',
  styleUrls: ['./past-order.component.scss'],
})
export class PastOrderComponent  implements OnInit {
  @Input() data!: any;
  isModalOpen: boolean = false;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    // localStorage.clear();
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  reloadOrder() {
    localStorage.removeItem('cart');
    localStorage.removeItem('carts');
    this.data.items.forEach((item: any) => {
      this.cartService.addToCart(item);
    });
    this.cartService.setInstructions(this.data.instructions);
    window.location.href = '/cart';
  }
}
