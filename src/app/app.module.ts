// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { routes } from './app-routing.module';

@NgModule({
  imports: [
    NoopAnimationsModule,
    RouterModule.forRoot(routes,
      { preloadingStrategy: PreloadAllModules }
    ),
    MatTabsModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
