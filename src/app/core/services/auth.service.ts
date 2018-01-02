import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  isLoggedIn(): boolean {
    return !!localStorage.getItem('localAuth');
  }

  logout(): void {
    localStorage.removeItem('localAuth');
  }
}
