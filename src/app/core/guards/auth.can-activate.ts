import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService, CoreService } from './../services';

@Injectable()
export class AuthCanActivate implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService,
    private coreService: CoreService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin();
  }

  checkLogin(): boolean {
    if (this.authService.isLoggedIn()) {
      this.coreService.setLogin(true);
      return true;
    }
    this.coreService.setLogin(false);
    this.router.navigate(['/login']);
    return false;
  }
}
