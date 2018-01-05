import {
  ActionReducerMap, createSelector, createFeatureSelector,
  ActionReducer, MetaReducer,
} from '@ngrx/store';

import * as fromMenuHeader from './menu-header.reducer';
import * as fromAlert from './alert.reducer';
import { LogoutAction } from './../actions/logout.action';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  enabledMenuHeader: fromMenuHeader.State;
  alert: fromAlert.State;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<any> = {
  enabledMenuHeader: fromMenuHeader.reducer,
  alert: fromAlert.reducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    if (action.type === LogoutAction.LOGOUT) {
      state = undefined;
    }
    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducer, provide an array of meta-reducer
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = [logger];

/**
 * Layout Reducers
 */
// export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

// export const getShowSidenav = createSelector(
//   getLayoutState,
//   fromLayout.getShowSidenav
// );
