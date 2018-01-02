import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss']
})

export class RouterComponent {
  @Input() route: string;

  constructor(private router: Router) {
  }

  goTo(): void {
    this.router.navigate([this.route]);
  }
}
