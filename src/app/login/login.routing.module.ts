import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { LoginComponent } from './components/login.component';

export const routes: Route[] = [
  {
    path: '',
    component: LoginComponent
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
export class LoginRoutingModule { }
