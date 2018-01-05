import { ApaActionInterface } from './../interfaces/apa-action.interface';
import { AlertAction } from './../actions/alert.action';

export interface State {
  data: object;
  enabled: boolean;
  acceptAlertCallback: () => void;
  cancelAlertCallback: () => void;
}
const initialState: State = {
  data: undefined,
  enabled: false,
  acceptAlertCallback: null,
  cancelAlertCallback: null,
};

export function reducer(state = initialState, action: ApaActionInterface): State {
  switch (action.type) {
    case AlertAction.ACTIVATE_ALERT:
      return Object.assign({}, state, {
        data: action.payload && action.payload.data ? action.payload.data : {},
        enabled: true,
        acceptAlertCallback: action.payload.acceptAlertCallback,
        cancelAlertCallback: action.payload.cancelAlertCallback
      });
    case AlertAction.DESACTIVATE_ALERT:
      return Object.assign({}, state, {
        data: undefined,
        enabled: false,
      });
    default: {
      return state;
    }
  }
}
