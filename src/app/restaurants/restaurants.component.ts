import { Component, OnInit } from '@angular/core';

import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantService } from 'app/restaurants/restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(
    private restaurantsService: RestaurantService
  ) { }

  ngOnInit() {
    this.restaurantsService.restaurants().subscribe( restaurants => {
      this.restaurants = restaurants;
    })
  }

}
