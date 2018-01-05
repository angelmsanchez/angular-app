import { Component, OnInit } from '@angular/core';

import { CoreService } from './core/services/core.service';

@Component({
  selector: 'app-angular',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLogin: boolean;
  constructor(private coreService: CoreService) {
  }

  ngOnInit(): void {
    this.initCoreService();
  }

  private initCoreService(): void {
    this.coreService
      .getLogin()
      .subscribe(isLogin => {
        console.log('subscribe ' + isLogin);
        this.isLogin = isLogin;
      });
  }
}
