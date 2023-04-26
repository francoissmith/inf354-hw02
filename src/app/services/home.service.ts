import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Info } from '../shared/Info';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {
    if (!localStorage.getItem('restaurants')) {
      let restaurants = [
        {
          id: 1,
          name: 'Jofllof of Africa',
          rating: 4.5,
          image: 'assets/2.jpeg',
          address: 'Lagos, Nigeria',
          description:
            'Jollof rice is a popular West African dish made with rice, tomatoes, onions, and spices. It is often served with fried chicken, fish, or goat meat. The dish is popular in Nigeria, Ghana, Sierra Leone, Liberia, and other countries in West Africa.',
          distance: '1.5km',
          typeof: 'African',
          time: '5 mins',
          price: 150,
        },
        {
          id: 2,
          name: 'Upside Down Eatery',
          rating: 5,
          image: 'assets/3.jpeg',
          address: 'Centurion, South Africa',
          description:
            'Upside Down Eatery is a restaurant in Centurion, South Africa. It is known for its unique concept of serving food upside down. The restaurant is owned by the same people who own the popular restaurant, The Pot Luck Club.',
          distance: '3.2km',
          typeof: 'Local',
          time: '12 mins',
          price: 100,
        },
        {
          id: 3,
          name: 'RocoMamas',
          rating: 4.7,
          image: 'assets/4.jpeg',
          address: 'Hennops, South Africa',
          description:
            'RocoMamas is a South African restaurant chain that serves burgers, ribs, and other dishes. It is known for its family-friendly atmosphere and its wide variety of food options.',
          distance: '1.3km',
          typeof: 'American',
          time: '4 mins',
          price: 140,
        },
        {
          id: 4,
          name: 'Spur Steak Ranches',
          rating: 4.1,
          image: 'assets/5.jpeg',
          address: 'Hatfield, South Africa',
          description:
            'Spur Steak Ranches is a South African restaurant chain that serves steaks, ribs, burgers, and other dishes. It is known for its family-friendly atmosphere and its wide variety of food options.',
          distance: '8.5km',
          typeof: 'Grill',
          time: '25 mins',
          price: 180,
        },
      ];
      localStorage.setItem('restaurants', JSON.stringify(restaurants));
    }
  }

  getRestaurants(): Observable<Info[]> {
    let restaurants: Info[] = [];
    if (localStorage.getItem('restaurants')) {
      restaurants = JSON.parse(localStorage.getItem('restaurants')!);
    }
    return of(restaurants);
  }

  getRestaurant(id: number): Observable<Info> {
    let restaurants: Info[] = [];

    if (localStorage.getItem('restaurants')) {
      restaurants = JSON.parse(localStorage.getItem('restaurants')!);
    }

    let restaurant: any = restaurants.find(
      (restaurant) => restaurant.id === id
    );

    return of(restaurant);
  }


}
