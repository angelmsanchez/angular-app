import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from './../../store-state/reducers';
import { MenuHeaderAction } from './../../store-state/actions';
import { UserInterface } from './../interfaces/user.interface';

@Injectable()
export class LoginService {

    private menuHeaderAction: MenuHeaderAction = new MenuHeaderAction();

    constructor(private store: Store<fromRoot.State>) {
    }

    login(body: UserInterface): boolean {
        const isLoggin = body.user === 'pesadilla' && body.password === 'lo';
        if (isLoggin) {
            this.extractData();
            this.store.dispatch(this.menuHeaderAction.activeMenuHeader());
        }
        return isLoggin;
    }

    private extractData(): void {
        localStorage.setItem('localAuth', 'pesadilla');
    }
}
