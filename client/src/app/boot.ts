import {HTTP_PROVIDERS} from '@angular/http';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provideForms} from '@angular/forms';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {APP_ROUTER_PROVIDERS} from './routes';
import {App} from './app';

bootstrap(App, [
  provideForms(),
  APP_ROUTER_PROVIDERS,
  {provide: LocationStrategy, useClass: HashLocationStrategy},
  HTTP_PROVIDERS
]);

