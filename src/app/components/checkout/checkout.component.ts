import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/Cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent  implements OnInit {
  @Input() data!: Cart;
  constructor() { }

  ngOnInit() {}

}
