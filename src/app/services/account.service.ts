import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PastOrder } from '../shared/PastOrder';
import { User } from '../shared/User';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor() {
    if (!localStorage.getItem('pastorder')) {
      let pastorder = [{
        id:0,
        location: '',
        total: 0,
        delivered: false,
        date: '',
        time: '',
        items: [{}]
      }];
      localStorage.setItem('pastorder', JSON.stringify(pastorder));
    }
    if(!localStorage.getItem('userDetails')) {
      let userdetails = {
        name: 'Francois Smith',
        email: 'francois@smith.com',
        phone: '012 345 1234',
      }
      localStorage.setItem('userDetails', JSON.stringify(userdetails));
    }
  }

  getUserDetails(): Observable<User> {
    let userdetails: User = {name: '', email: '', phone: ''};

    if (localStorage.getItem('userDetails')) {
      userdetails = JSON.parse(localStorage.getItem('userDetails')!);
    }

    return of(userdetails);
  }

  getPastOrders(): Observable<any[]> {
    let pastorders: PastOrder[] = [];

    if (localStorage.getItem('pastorder')) {
      pastorders = JSON.parse(localStorage.getItem('pastorder')!);
    }

    return of(pastorders);
  }

  getPastOrder(id: number): Observable<any> {
    let pastorders: PastOrder[] = [];

    if (localStorage.getItem('pastorders')) {
      pastorders = JSON.parse(localStorage.getItem('pastorders')!);
    }

    let pastorder: any = pastorders.find(
      (pastorder) => pastorder.id === id
    );

    return of(pastorder);
  }

  addToPastOrders(pastorder: any) {
    let pastorders: any[] = [];
    if (localStorage.getItem('pastorders')) {
      pastorders = JSON.parse(localStorage.getItem('pastorders')!);
    }

    pastorders.push(pastorder);

    localStorage.setItem('pastorders', JSON.stringify(pastorders));
  }

}
