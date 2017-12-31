import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { UserInterface } from './../interfaces/user.interface';

@Injectable()
export class LoginService {

    login(body: UserInterface): boolean {
        return body.user === 'pesadilla' && body.password === 'lo';
    }
}
