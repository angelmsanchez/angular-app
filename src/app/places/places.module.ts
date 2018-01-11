import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesRoutingModule } from './places.routing.module';
import { DetailComponent } from './components';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PlacesRoutingModule,
    SharedModule,
  ],
  declarations: [
    DetailComponent
  ]
})

export class PlacesModule { }
