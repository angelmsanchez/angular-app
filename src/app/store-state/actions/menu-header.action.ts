import { ApaActionInterface } from './../interfaces/apa-action.interface';

export class MenuHeaderAction {
  static ACTIVATE_MENU_HEADER = 'ACTIVATE_MENU_HEADER';
  static DEACTIVATE_MENU_HEADER = 'DEACTIVATE_MENU_HEADER';

  activeMenuHeader(): ApaActionInterface {
    return {
      type: MenuHeaderAction.ACTIVATE_MENU_HEADER
    };
  }

  deactiveMenuHeader(): ApaActionInterface {
    return {
      type: MenuHeaderAction.DEACTIVATE_MENU_HEADER
    };
  }
}
