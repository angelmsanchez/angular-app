import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Constants } from './../../../shared/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  urlImg: string = Constants.URL_IMG + 'general/';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
}
