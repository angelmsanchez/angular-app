import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { BiteComponent } from './components/bite.component';

export const routes: Route[] = [
  {
    path: '',
    component: BiteComponent
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
export class BiteRoutingModule { }
