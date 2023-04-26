import { Component, Input, OnInit } from '@angular/core';
import { promises } from 'dns';
import { CartService } from 'src/app/services/cart.service';
import { PastOrder } from 'src/app/shared/PastOrder';

@Component({
  selector: 'app-past-order',
  templateUrl: './past-order.component.html',
  styleUrls: ['./past-order.component.scss'],
})
export class PastOrderComponent implements OnInit {
  @Input() data!: PastOrder; 
  isModalOpen: boolean = false;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    // localStorage.clear();
  }
// ********* Open Modal *********
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

// ********* Reorder *********
  async reloadOrder() {
    localStorage.removeItem('carts');
    this.data.items.forEach((item: any) => {
      switch (item.quantity) {
        case 1:
          this.cartService.addToCart(item);
          break;
        case 2:
          this.cartService.addToCart(item);
          this.cartService.addToCart(item);
          break;
        case 3:
          this.cartService.addToCart(item);
          this.cartService.addToCart(item);
          this.cartService.addToCart(item);
          break;
        case 4:
          this.cartService.addToCart(item);
          this.cartService.addToCart(item);
          this.cartService.addToCart(item);
          this.cartService.addToCart(item);
          break;
        case 5:
          this.cartService.addToCart(item);
          this.cartService.addToCart(item);
          this.cartService.addToCart(item);
          this.cartService.addToCart(item);
          this.cartService.addToCart(item);
          break;
      }
    });
    window.location.href = '/cart'
  }
}
