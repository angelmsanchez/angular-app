import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,
      { preloadingStrategy: PreloadAllModules }
    )
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
