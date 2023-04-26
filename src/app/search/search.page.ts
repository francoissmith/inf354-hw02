import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Info } from '../shared/Info';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  data!: Info[];
  constructor(private homeService: HomeService, private cartService: CartService) { }

  ngOnInit() {
    this.homeService.getRestaurants().subscribe((restaurants:any) => { this.data = restaurants; console.log(this.data); });
  }

  onSearch(event: any) {
    const value = event.target.value;
    if (event.keyCode === 8) {
      this.data.map((item:Info) => {
        this.homeService.getRestaurants().subscribe((restaurants:any) => { this.data = restaurants; console.log(this.data); });
      } );
    }

    if(value.trim() !== '') {
      this.data = this.data.filter((item) => {
        return item.name.toLowerCase().includes(value.toLowerCase());
      });
      if (this.data.length == 0) {
        this.data = [{
          id: 0,
          name: 'No result found',
          typeof: '',
          distance: 0,
          price: 0,
          image: '',
          rating: 0,
          time: '',
        }];
      }
    }
    else {
      this.data.map((item:Info) => {
        this.homeService.getRestaurants().subscribe((restaurants:any) => { this.data = restaurants; console.log(this.data); });
      } );
    }
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
}
