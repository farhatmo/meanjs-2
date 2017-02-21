import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';
import * as session from './session';


export interface IAppState {
  session?: session.ISession;
};

export const rootReducer = combineReducers<IAppState>({
  session: session.sessionReducer,
  router: routerReducer,
});

export function deimmutify(store) {
  return {
    session: store.session,
    router: store.router,
  };
}

export function reimmutify(plain) {
  return {
    session: session.SessionFactory(plain.session),
    router: plain.router,
  };
}