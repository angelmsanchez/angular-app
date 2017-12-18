import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {

  constructor(private router: Router) {
  }

  goToSteps(): void {
    this.router.navigate(['home/amount-request']);
  }
}
