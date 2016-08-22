import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
let style = require('!!raw!sass!./views/navbar.scss');

@Component({
  selector: 'navbar',
  template: require('./views/navbar.html'),
  styles: [style],
  directives: [ROUTER_DIRECTIVES],
  changeDetection: ChangeDetectionStrategy.Default
})

export class NavbarComponent {
  constructor() {
  }
  
}
