import { ApaActionInterface } from './../interfaces/apa-action.interface';

export class AlertAction {
  static ACTIVATE_ALERT = 'ACTIVATE_ALERT';
  static DESACTIVATE_ALERT = 'DESACTIVATE_ALERT';

  activeAlert(data: object, acceptAlertCallback?: () => void, cancelAlertCallback?: () => void): ApaActionInterface {
    return {
      type: AlertAction.ACTIVATE_ALERT,
      payload: {
        data: data,
        acceptAlertCallback: acceptAlertCallback,
        cancelAlertCallback: cancelAlertCallback
      },
    };
  }

  desactiveAlert(): ApaActionInterface {
    return {
      type: AlertAction.DESACTIVATE_ALERT,
    };
  }
}
