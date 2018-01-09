import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesRoutingModule } from './places.routing.module';
import { OportoComponent } from './components';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PlacesRoutingModule,
    SharedModule,
  ],
  declarations: [
    OportoComponent
  ]
})

export class PlacesModule { }
