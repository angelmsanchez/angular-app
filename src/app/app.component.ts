import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from './store-state/reducers';
import { MenuHeaderAction } from './store-state/actions';

@Component({
  selector: 'app-angular',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  enabledMenuHeader: Observable<any>;

  private menuHeaderAction: MenuHeaderAction = new MenuHeaderAction();

  constructor(
    private store: Store<fromRoot.State>,
    private location: Location) {
  }

  ngOnInit(): void {
    this.configMenu();
    this.enabledMenuHeader = this.store.select('enabledMenuHeader');
  }


  private configMenu(): void {
    if (this.location.path() === '/login') {
      this.store.dispatch(this.menuHeaderAction.deactiveMenuHeader());
    } else {
      this.store.dispatch(this.menuHeaderAction.activeMenuHeader());
    }
  }
}
