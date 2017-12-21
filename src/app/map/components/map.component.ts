import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log('ngOnInit MapComponent');
  }

  goTo(): void {
    console.log('goto ');
    this.router.navigate(['/home']);
  }
}
