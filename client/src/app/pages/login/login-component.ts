import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../common/services/authentication-service';
let style = require('!!raw!sass!./views/login.scss');

@Component({
  selector: 'login',
  template: require('./views/login.html'),
  styles: [style],
  providers: [AuthService]
})

export class LoginComponent {
  
  constructor(private router:Router, private authService: AuthService) {
  }
  
  public login(username, email) {
    this.authService.generateToken(username);
    this.router.navigate(['/workbench']);
  }
  
}
