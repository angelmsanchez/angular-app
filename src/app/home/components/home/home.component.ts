import { Component, OnInit } from '@angular/core';

import { PlaceInterface } from './../../../shared/interfaces/place.interface';
import { Constants } from './../../../shared/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  isImg: boolean;
  tabs: object[];
  tabActive = '1985~1993';
  urlImg: string = Constants.URL_IMG;
  places: PlaceInterface[];

  constructor() {
  }

  ngOnInit(): void {
    this.initTabs();
    this.initPlaces();
    this.isImg = false;
  }

  changeTab(event): void {
    this.tabActive = event.tab.service;
  }

  private initTabs(): void {
    this.tabs = [
      {
        title: '1985~1993',
        service: '1985~1993',
        isActive: this.tabActive === '1985~1993'
      },
      {
        title: '2017',
        service: '2017',
        isActive: this.tabActive === '2017'
      },
      {
        title: '2018',
        service: '2018',
        isActive: this.tabActive === '2018'
      },
      {
        title: 'Otras',
        service: 'otras',
        isActive: this.tabActive === 'otras'
      }
    ];
  }

  private initPlaces(): void {
    this.places = [
      {
        title: 'biarritz',
        img: this.urlImg + '2017/biarritz/biarritz.jpg'
      },
      {
        title: 'oporto',
        img: this.urlImg + '2017/oporto/oporto.jpg'
      }
    ];
  }
}
