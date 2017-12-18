import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  HomeComponent, AmountRequestComponent,
  TimeDurationComponent, DetailComponent
} from './components';
import { ProcessCanActivate } from './services/process.can-activate';

export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'amount-request',
    component: AmountRequestComponent
  },
  {
    path: 'time-duration',
    component: TimeDurationComponent,
    canActivate: [
      ProcessCanActivate
    ]
  },
  {
    path: 'detail',
    component: DetailComponent,
    canActivate: [
      ProcessCanActivate
    ]
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
    ProcessCanActivate
  ]
})
export class HomeRoutingModule { }
