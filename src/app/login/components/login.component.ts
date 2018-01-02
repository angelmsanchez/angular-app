import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserInterface } from './../interfaces/user.interface';
import { LoginService } from './../services/login.service';
import { CoreService } from './../../core/services/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  user: UserInterface;

  constructor(private router: Router,
    private loginService: LoginService,
    private coreService: CoreService) {
  }

  ngOnInit(): void {
    this.initUser();
  }

  login(): void {
    if (this.loginService.login(this.user)) {
      this.coreService.setLogin(true);
      this.router.navigate(['/home']);
    } else {
      console.log('Error password');
    }
  }

  private initUser(): void {
    this.user = {
      user: null,
      password: null
    };
  }
}
