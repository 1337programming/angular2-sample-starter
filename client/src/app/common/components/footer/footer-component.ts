import {Component} from '@angular/core';
import {Router} from '@angular/router';

let style = require('!!raw!sass!./views/footer.scss');

@Component({
  selector: 'footer-custom',
  template: require('./views/footer.html'),
  styles: [style],
})

export class FooterComponent {
  constructor(private router: Router) {
    
  }
}
