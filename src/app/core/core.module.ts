import { NgModule, SkipSelf, Optional } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent, MenuComponent } from './components';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
  ],
  declarations: [
    MenuComponent,
    HeaderComponent,
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
  ]
})

export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
