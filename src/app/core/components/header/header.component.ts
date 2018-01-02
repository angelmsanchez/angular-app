import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Constants } from './../../../shared/constants';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  urlImg: string = Constants.URL_IMG + 'general/';

  constructor(private router: Router,
    private authService: AuthService) {
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
