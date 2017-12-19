import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { MapComponent } from './components/map.component';

export const routes: Route[] = [
  {
    path: '',
    component: MapComponent
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
export class MapRoutingModule { }
