import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cart } from '../shared/Cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {
    if (!localStorage.getItem('cart')) {
      let cart = [{
        name: 'Jofllof of Africa',
        typeof: 'African',
        distance: '1.5km',
        price: 150,
        image: 'assets/2.jpeg',
      }];
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  getCarts(): Observable<any[]> {
    let carts: any[] = [];
    if (localStorage.getItem('carts')) {
      carts = JSON.parse(localStorage.getItem('carts')!);
    }
    return of(carts);
  }

  getCart(id: number): Observable<any> {
    let carts: Cart[] = [];

    if (localStorage.getItem('carts')) {
      carts = JSON.parse(localStorage.getItem('carts')!);
    }

    let cart: any = carts.find(
      (cart) => cart.id === id
    );

    return of(cart);
  }

  addToCart(cart: any) {
    let carts: any[] = [];
    if (localStorage.getItem('carts')) {
      carts = JSON.parse(localStorage.getItem('carts')!);
    }

    carts.push(cart);

    localStorage.setItem('carts', JSON.stringify(carts));
  }

  async deleteItem(id: any){
    let items:Cart[] = []
    if (localStorage.getItem('carts'))
    {
      items = JSON.parse(localStorage.getItem('carts')!)
    }

    let item = items.find(item => item.id == id)
  
    
    if (item)
    {
      let index = items.indexOf(item)
      items.splice(index, 1)
      await localStorage.setItem('items', JSON.stringify(items))
    }
    console.log(items);
  }

}
