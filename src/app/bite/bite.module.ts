import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiteComponent, FilterComponent, RestaurantComponent } from './components';
import { BiteRoutingModule } from './bite.routing.module';
import { BiteService } from './services/index';

@NgModule({
  imports: [
    CommonModule,
    BiteRoutingModule
  ],
  declarations: [
    BiteComponent,
    FilterComponent,
    RestaurantComponent
  ],
  providers: [
    BiteService
  ]
})
export class BiteModule { }
