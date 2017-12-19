import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  HomeComponent
} from './components';

export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
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
export class HomeRoutingModule { }
