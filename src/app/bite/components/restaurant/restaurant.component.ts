import { Component, OnInit, Input } from '@angular/core';

import { RestaurantInterface } from '../../interfaces/index';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  @Input() restaurant: RestaurantInterface;
  constructor() { }

  ngOnInit() {
    this.initRate();
  }

  private initRate(): void {
    this.restaurant.rateStars = Array(this.restaurant.rate);
  }

}
