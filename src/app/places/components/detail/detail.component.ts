import { Component, OnInit } from '@angular/core';

import { PlaceInterface } from './../../../shared/interfaces/place.interface';
import { Constants } from './../../../shared/constants';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})

export class DetailComponent implements OnInit {
  isImg: boolean;
  tabs: object[];
  tabActive = '1985~1993';
  urlImg: string = Constants.URL_IMG;
  places: PlaceInterface[];

  constructor() {
  }

  ngOnInit(): void {
    this.isImg = false;
  }
}
