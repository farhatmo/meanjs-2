import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// MATERIAL DESIGN MODULES
import { MaterialModule, OverlayContainer } from '@angular/material';
import 'hammerjs';

// FONT AWESOME
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';


//  REDUX
import { NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';

//  ROUTING APP
import { APP_ROUTES } from './app.routes';

//  SERVICES 
import { UsersService, AuthInterceptor } from './users/index';
import {SessionActions} from './core/actions/session.actions';
import {SessionEpics} from './core/epics';

//  COMPONENTS
import { AppComponent } from './app.component';
import { AppToolbarComponent } from './app-toolbar/index';
import { LoginComponent, RegisterComponent } from './users/index';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    NgReduxRouterModule,
    APP_ROUTES,
    Angular2FontAwesomeModule,
    MaterialModule.forRoot()
  ],
  providers: [
    OverlayContainer,
    AuthInterceptor,
    SessionActions,
    SessionEpics,
    
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
