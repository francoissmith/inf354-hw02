import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Info } from '../shared/Info';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  data!: Info[];
  constructor(private homeService: HomeService) { }

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
    }
    else {
      this.data.map((item:Info) => {
        this.homeService.getRestaurants().subscribe((restaurants:any) => { this.data = restaurants; console.log(this.data); });
      } );
    }
  }
}
