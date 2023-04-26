import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cart } from '../shared/Cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  clearCart() {
    throw new Error('Method not implemented.');
  }
  constructor() {
    if (!localStorage.getItem('cart')) {
      let cart = [{
        name: 'Jofllof of Africa',
        typeof: 'African',
        distance: '1.5km',
        price: 150,
        image: 'assets/2.jpeg',
        quantiy: 1,
      }];
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  getCarts(): Observable<Cart[]> {
    let carts: Cart[] = [];
    if (localStorage.getItem('carts')) {
      carts = JSON.parse(localStorage.getItem('carts')!);
    }
    return of(carts);
  }

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

  addToCart(cart: any) {
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


    localStorage.setItem('carts', JSON.stringify(carts));
  }

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
  
    // console.log(item);
    // if (item) {
    //   if(item.quantity > 1){
    //     item.quantity--
    //   } else { 
    //     //   let index = items.indexOf(item)
    //     //   items.splice(index, 1)
    //     //   await localStorage.setItem('items', JSON.stringify(items))
    //   }
    // 
  }

}
