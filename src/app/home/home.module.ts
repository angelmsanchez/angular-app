import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './components';

@NgModule({
  imports: [
    HomeRoutingModule,
    MatTabsModule,
  ],
  declarations: [
    HomeComponent
  ]
})

export class HomeModule { }
