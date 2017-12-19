import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  isImg: boolean;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.isImg = false;
  }

  goToSteps(): void {
    this.router.navigate(['home/amount-request']);
  }
}
