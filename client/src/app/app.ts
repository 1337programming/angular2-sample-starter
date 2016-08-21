import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Location} from '@angular/common';
let template = require('./app.html');

@Component({
  selector: 'my-app',
  template: template,
  directives: [ROUTER_DIRECTIVES]
})
export class App {
  
  constructor(public location:Location) {
    
  }
  
  getLinkStyle(path) {
    
    if (path === this.location.path()) {
      return true;
    }
    else if (path.length > 0) {
      return this.location.path().indexOf(path) > -1;
    }
  }
  
  
}
