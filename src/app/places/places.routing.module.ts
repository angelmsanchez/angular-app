import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
 DetailComponent
} from './components';

export const routes: Route[] = [
  {
    path: ':id',
    component: DetailComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PlacesRoutingModule { }
