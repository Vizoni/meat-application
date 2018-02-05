import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem>;

  constructor(
    private restaurantService: RestaurantService,
    private routes: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu = this.restaurantService.menuOfRestaurant(this.routes.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }

}
