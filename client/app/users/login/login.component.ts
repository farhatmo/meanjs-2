import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionActions } from '../../core/actions';
import { select } from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {NgReduxRouter} from '@angular-redux/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    returnUrl: string;
    @select(['session', 'isLoading']) isLoading$: Observable<boolean>;
    @select(s => !!s.session.token) loggedIn$: Observable<boolean>;
    form: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private ngReduxRouter: NgReduxRouter,
        private router: Router,
        private actions: SessionActions) { 
            this.form = this._buildForm();
        }

    ngOnInit() {
        // reset login status
        // this.actions.logoutUser();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.loggedIn$.subscribe(
                isLOggedIn => {
                    console.log('this.returnUrl:', this.returnUrl);
                    if(isLOggedIn)
                        this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.actions.logoutUser();
                });
    }



    login(formCredentials) {
      this.actions.loginUser(formCredentials);
    }

  private _buildForm() {
    return new FormGroup({
      usernameOrEmail: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }



}


