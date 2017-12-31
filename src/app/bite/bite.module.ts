import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiteComponent } from './components/bite.component';
import { BiteRoutingModule } from './bite.routing.module';

@NgModule({
  imports: [
    CommonModule,
    BiteRoutingModule
  ],
  declarations: [BiteComponent]
})
export class BiteModule { }
