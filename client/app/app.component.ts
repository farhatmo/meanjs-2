import { Component } from '@angular/core';
import {
  DevToolsExtension,
  NgRedux
} from '@angular-redux/store';
import {NgReduxRouter} from '@angular-redux/router';
import {createEpicMiddleware} from 'redux-observable';
import {
  IAppState,
  rootReducer,
  middleware,
  enhancers
} from './core/store';
import {SessionEpics} from './core/epics';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(
    private devTools: DevToolsExtension,
    private ngRedux: NgRedux<IAppState>,
    private ngReduxRouter: NgReduxRouter,
    private epics: SessionEpics) {

    middleware.push(createEpicMiddleware(this.epics.login));

    ngRedux.configureStore(
      rootReducer,
      {},
      middleware, 
      devTools.isEnabled() ?
        [ ...enhancers, devTools.enhancer() ] :
        enhancers);

    ngReduxRouter.initialize();
  }


}
