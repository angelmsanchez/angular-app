// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { CoreModule } from './core/core.module';


@NgModule({
  imports: [
    NoopAnimationsModule,
    RouterModule.forRoot(routes,
      { preloadingStrategy: PreloadAllModules }
    ),
    CoreModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
