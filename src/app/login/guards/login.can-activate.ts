import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';
import * as fromRoot from './../../store-state/reducers';
import { MenuHeaderAction } from './../../store-state/actions';

import { AuthService } from './../../core/services/auth.service';

@Injectable()
export class LoginCanActivate implements CanActivate {

  private menuHeaderAction: MenuHeaderAction = new MenuHeaderAction();
  constructor(private authService: AuthService,
    private router: Router,
    private store: Store<fromRoot.State>) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      this.store.dispatch(this.menuHeaderAction.activeMenuHeader());
      this.router.navigate(['/home']);
      return false;
    }
    this.store.dispatch(this.menuHeaderAction.deactiveMenuHeader());
    return true;
  }
}
