import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterComponent, TabsComponent, PlaceComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RouterComponent,
    TabsComponent,
    PlaceComponent,
  ],
  exports: [
    RouterComponent,
    TabsComponent,
    PlaceComponent,
  ]
})

export class SharedModule { }
