import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Location} from '@angular/common';
import {FooterComponent} from './common/components/footer/footer-component';
import {NavbarComponent} from './common/components/navbar/navbar-component';
let template = require('./app.html');

@Component({
  selector: 'my-app',
  template: template,
  directives: [ROUTER_DIRECTIVES, FooterComponent, NavbarComponent]
})
export class AppComponent {
  
  constructor(public location: Location) {
    
  }
  
  public loggingIn(): boolean {
    return this.location.path().indexOf('login') > -1;
  }
  
  public getLinkStyle(path) {
    
    if (path === this.location.path()) {
      return true;
    }
    else if (path.length > 0) {
      return this.location.path().indexOf(path) > -1;
    }
  }
  
  
}
