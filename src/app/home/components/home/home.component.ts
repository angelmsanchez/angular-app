import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  isImg: boolean;
  tabs: object[];
  tabActive = '1985~1993';
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.initTabs();
    this.isImg = false;
  }

  goToSteps(): void {
    this.router.navigate(['home/amount-request']);
  }

  changeTab(event): void {
    this.tabActive = event.tab.service;
    console.log('change.tab', event);
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
}
