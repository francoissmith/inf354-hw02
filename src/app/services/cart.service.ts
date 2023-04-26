import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cart } from '../shared/Cart';
import { PastOrder } from '../shared/PastOrder';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  instructions: string = '';
  // ********* Local Storage *********
  constructor() {
    if (!localStorage.getItem('cart')) {
      let cart = [{}];
      localStorage.setItem('cart', JSON.stringify(cart));
      let instructions = '';
      localStorage.setItem('instructions', JSON.stringify(instructions));
    }
  }

  // ********* Get Cart *********
  getCarts(): Observable<Cart[]> {
    let carts: Cart[] = [];
    if (localStorage.getItem('carts')) {
      carts = JSON.parse(localStorage.getItem('carts')!);
    }
    return of(carts);
  }

  // ********* Get Instructions *********
  getIstructions(): Observable<string> {
    let instructions: string = '';
    if (localStorage.getItem('instructions')) {
      instructions = JSON.parse(localStorage.getItem('instructions')!);
    }
    return of(instructions);
  }

  // ********* Set Instructions *********
  setInstructions(instructions: string) {
    localStorage.setItem('instructions', JSON.stringify(instructions));
  }

  // ********* Get Cart *********
  getCart(id: number): Observable<Cart> {
    let carts: Cart[] = [];

    if (localStorage.getItem('carts')) {
      carts = JSON.parse(localStorage.getItem('carts')!);
    }

    let cart: any = carts.find(
      (cart) => cart.id === id
    );

    return of(cart);
  }

  // ********* Get Subtotal *********
  getSubTotal(): number {
    let carts: Cart[] = [];
    let subtotal = 0;
    if (localStorage.getItem('carts')) {
      carts = JSON.parse(localStorage.getItem('carts')!);
    }
    carts.map((cart) => {
      subtotal += cart.price * cart.quantity;
    });
    return subtotal;
  }

  // ********* Add to Cart *********
  async addToCart(cart: any) {
    let carts: any[] = [];
    if (localStorage.getItem('carts')) {
      carts = JSON.parse(localStorage.getItem('carts')!);
    }
    let alreadyAdded = false;
    carts.map((item) => {
      if (item.id === cart.id) {
        item.quantity++;
        console.log(item);
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      cart.quantity = 1;
      carts.push(cart);
    }
    await localStorage.setItem('carts', JSON.stringify(carts));
  }

  // ********* Delete Item *********
  async deleteItem(id: number){
    console.log(id);
    let items:Cart[] = []
    if (localStorage.getItem('carts'))
    {
      items = JSON.parse(localStorage.getItem('carts')!)
    }

    items.map((item) => {
      if (item.id === id) {
        console.log(item);
        if (item.quantity > 1) {
          item.quantity--
        } else {
        let index = items.indexOf(item)
        items.splice(index, 1)
      }
    }
  });
  localStorage.setItem('carts', JSON.stringify(items))
  }

  // ********* Clear Cart *********
  clearCart(instructions?: string) {
    let pastOrders = JSON.parse(localStorage.getItem('pastorder')!);
    let carts: Cart[] = [];
    if (localStorage.getItem('carts')) {
      carts = JSON.parse(localStorage.getItem('carts')!);
    }
    let pastorder: PastOrder = {
      id: pastOrders.length + 1,
      location: 'University of Pretoria, Informatorium',
      total: this.getSubTotal(),
      delivered: true,
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
      items: carts,
      instructions: instructions
    };
    pastOrders.push(pastorder);
    localStorage.setItem('pastorder', JSON.stringify(pastOrders));
    localStorage.removeItem('carts');
  }

}
