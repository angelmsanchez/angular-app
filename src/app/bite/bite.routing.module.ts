import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { BiteComponent } from './components';

export const routes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BiteComponent
      },
      {
        path: 'detail',
        component: BiteComponent
      }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BiteRoutingModule { }
