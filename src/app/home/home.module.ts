import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTabsModule,
  ],
  declarations: [
    HomeComponent
  ]
})

export class HomeModule { }
