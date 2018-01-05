import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterComponent, TabsComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RouterComponent,
    TabsComponent,
  ],
  exports: [
    RouterComponent,
    TabsComponent,
  ]
})

export class SharedModule { }
