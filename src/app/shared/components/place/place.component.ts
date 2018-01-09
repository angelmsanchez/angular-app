import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { PlaceInterface } from './../../interfaces/place.interface';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})

export class PlaceComponent {
  @Input() place: PlaceInterface;

  constructor(private router: Router) {
  }

  getMyStyles(): object {
    return {
      'background-image': 'url(' + this.place.img + ')'
    };
  }

  goTo(): void {
    this.router.navigate(['/places/' + this.place.title]);
  }

}
