import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { UserInterface } from './../interfaces/user.interface';

@Injectable()
export class LoginService {

    login(body: UserInterface): boolean {
        const isLoggin = body.user === 'pesadilla' && body.password === 'lo';
        if (isLoggin) { this.extractData(); }
        return isLoggin;
    }

    private extractData(): void {
        localStorage.setItem('localAuth', 'pesadilla');
    }
}
