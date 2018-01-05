import { Action } from '@ngrx/store';

export interface ApaActionInterface extends Action {
  payload?: any;
  type: string;
}
