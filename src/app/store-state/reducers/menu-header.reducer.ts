import { ApaActionInterface } from './../interfaces/apa-action.interface';

import { MenuHeaderAction } from './../actions/menu-header.action';

export interface State {
  enabledMenuHeader: boolean;
}

const initialState = false;

export function reducer(state = initialState, action: ApaActionInterface): boolean {
  switch (action.type) {
    case MenuHeaderAction.ACTIVATE_MENU_HEADER:
      state = true;
      return state;
    case MenuHeaderAction.DEACTIVATE_MENU_HEADER:
      state = false;
      return state;
    default: {
      return state;
    }
  }
}
