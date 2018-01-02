import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterComponent } from './components/router/router.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RouterComponent
  ],
  exports: [
    RouterComponent
  ]
})

export class SharedModule { }
