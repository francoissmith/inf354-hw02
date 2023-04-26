import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PastOrder } from '../shared/PastOrder';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor() {
    if (!localStorage.getItem('past')) {
      let past = [{
        id: 1,
        name: 'Jofllof of Africa',
        location: 'Lagos, Nigeria',
        total: 300,
        delivered: true,
        date: 'March 12, 2021',
        time: '10:00 AM',
        amount: 2,
      }];
      localStorage.setItem('past', JSON.stringify(past));
    }
  }

  getPastOrders(): Observable<any[]> {
    let pasts: any[] = [];
    if (localStorage.getItem('past')) {
      pasts = JSON.parse(localStorage.getItem('past')!);
    }
    return of(pasts);
  }

  getPastOrder(id: number): Observable<any> {
    let pasts: PastOrder[] = [];

    if (localStorage.getItem('pasts')) {
      pasts = JSON.parse(localStorage.getItem('pasts')!);
    }

    let past: any = pasts.find(
      (past) => past.id === id
    );

    return of(past);
  }

  addToPastOrders(past: any) {
    let pasts: any[] = [];
    if (localStorage.getItem('pasts')) {
      pasts = JSON.parse(localStorage.getItem('pasts')!);
    }

    pasts.push(past);

    localStorage.setItem('pasts', JSON.stringify(pasts));
  }

}
