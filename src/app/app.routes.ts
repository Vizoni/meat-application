import { Routes } from "@angular/router";

import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";
import { RestaurantsComponent } from "app/restaurants/restaurants.component";



export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'about', component: AboutComponent}
]