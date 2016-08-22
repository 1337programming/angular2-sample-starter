import {Injectable} from '@angular/core';
interface MyWindow extends Window {
  localStorage:any;
  myFunction(): void;
}

declare var window: MyWindow;

@Injectable()
export class AuthService {
  
  private token:string;
  private username:string;
  constructor() {
    if (window.localStorage.token) {
      this.token = window.localStorage.token;
    }
  }
  
  public generateToken(username?: string) {
    if (!username) {
      this.setToken(window.btoa(this.username));
    } else {
      this.setToken(window.btoa(username));
    }
  }
  
  public deleteToken() {
    delete window.localStorage.token;
  }
  
  public setToken(token:string):void {
    this.token = token;
    window.localStorage.token = token;
    this.setUsername(window.atob(token));
  }
  
  public getToken():string {
    return this.token;
  }
  
  public setUsername(name:string):void {
    this.username = name;
  }
  
  public getUsername():string {
    return this.username;
  }
  
}