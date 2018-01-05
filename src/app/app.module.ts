import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Imports @ngrx/store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './store-state/reducers';

import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { LoginCanActivate } from './login/guards/login.can-activate';

@NgModule({
  imports: [
    NoopAnimationsModule,
    RouterModule.forRoot(routes,
      { preloadingStrategy: PreloadAllModules }
    ),
    CoreModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument()
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    LoginCanActivate
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
