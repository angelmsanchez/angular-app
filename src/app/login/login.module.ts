import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './components/login.component';
import { LoginService } from './services/login.service';

@NgModule({
  imports: [
    LoginRoutingModule,
    FormsModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})

export class LoginModule { }
