import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class CoreService {
  private isLogin: boolean;

  constructor() {
    this.isLogin = true;
  }

  setLogin(changeLogin: boolean): void {
    this.isLogin = changeLogin;
  }

  getLogin(): Observable<boolean> {
    return Observable.of(this.isLogin);
  }
}
