import { Component, OnInit } from '@angular/core';

import { PlaceInterface } from './../../../shared/interfaces/place.interface';
import { Constants } from './../../../shared/constants';

@Component({
  selector: 'app-oporto',
  templateUrl: './oporto.component.html',
})

export class OportoComponent implements OnInit {
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
