import { ApaActionInterface } from './../interfaces/apa-action.interface';

export class LogoutAction {
  static LOGOUT = 'LOGOUT';

  logoutAction(): ApaActionInterface {
    return {
      type: LogoutAction.LOGOUT
    };
  }
}
