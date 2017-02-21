import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { SessionActions } from '../core/actions';
import { Router } from '@angular/router';
import {TooltipPosition} from '@angular/material';

@Component({
  selector: 'app-app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.css']
})
export class AppToolbarComponent implements OnInit {
    @Input() titleToolbar :string;
    @select(s => !s.session.token) loggedIn$: Observable<boolean>;
    @select(s => !!s.session.token) loggedOut$: Observable<boolean>;

  constructor(private router: Router,
            private actions: SessionActions) { }

  ngOnInit() {
    this.loggedIn$.subscribe(
      isLoggedIn => {
        if(isLoggedIn)
          this.router.navigate(['login']);
      },
      error => {
        this.router.navigate(['login']);
      });
    }
  

  logout() {
    var toto = this.actions.logoutUser();
    console.log('toot:',toto);
  }

}
