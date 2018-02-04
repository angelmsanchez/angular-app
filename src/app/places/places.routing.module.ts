import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DetailPlacesResolve } from './guards/detail-places.resolve';

import {
  DetailComponent
} from './components';

export const routes: Route[] = [
  {
    path: ':id',
    component: DetailComponent,
    resolve: { place: DetailPlacesResolve}
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    DetailPlacesResolve
  ]
})
export class PlacesRoutingModule { }
