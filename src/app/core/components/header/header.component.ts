import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  // urlImg: string = Constants.URL_IMG + 'bme-logo.png';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  goToHome(): void {
    // this.router.navigate([routeToNavigate]);
  }
}
