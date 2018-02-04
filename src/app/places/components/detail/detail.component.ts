import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlaceInterface } from './../../../shared/interfaces/place.interface';
import { Constants } from './../../../shared/constants';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent {
  place: string = this.route.snapshot.data['place'];
  urlVideo: string = Constants.URL_VIDEO + this.place + '.mp4';
  urlImg: string = Constants.URL_IMG;

  constructor(private route: ActivatedRoute) {
  }
}
