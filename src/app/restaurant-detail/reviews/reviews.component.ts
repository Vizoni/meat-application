import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurants.service';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(
    private restaurantService: RestaurantService,
    private routes: ActivatedRoute
  ) { }

  ngOnInit() {
    // pega o ID do PARENT (já q essa é uma sub-rota do restaurant-detail)
    this.reviews =  this.restaurantService.reviewsOfRestaurant(this.routes.parent.snapshot.params['id'])
  }

}
