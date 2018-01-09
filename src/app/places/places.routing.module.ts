import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
 OportoComponent
} from './components';

export const routes: Route[] = [
  {
    path: 'oporto',
    component: OportoComponent,
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
