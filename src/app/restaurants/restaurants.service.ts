import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MEAT_API } from './../app.api';
import { Restaurant } from "app/restaurants/restaurant/restaurant.model";
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class RestaurantService {

    constructor(
      private http: Http
    ){}

    restaurants(): Observable<Restaurant[]> {
      return this.http.get(`${MEAT_API}/restaurants`)
      // transforma o objeto do tipo Response em uma array de Restaurantes JSON
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

}