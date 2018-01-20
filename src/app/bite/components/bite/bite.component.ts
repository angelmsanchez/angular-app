import { Component, OnInit } from '@angular/core';

import { RestaurantInterface } from './../../interfaces/restaurant.interface';
import { BiteService } from './../../services';

@Component({
  selector: 'app-bite',
  templateUrl: './bite.component.html',
  styleUrls: ['./bite.component.scss']
})
export class BiteComponent implements OnInit {
  restaurants: RestaurantInterface[];

  constructor(private biteService: BiteService) { }

  ngOnInit() {
    this.initRestaurants();
  }

  private initRestaurants(): void {
    this.restaurants = this.biteService.getRestaurants();
  }

}
