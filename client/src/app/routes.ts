import {provideRouter, RouterConfig} from '@angular/router';
import {GraphQLComponent} from './components/graphql-sample/graphql-sample-component';

export const routes:RouterConfig = [
  {
    path: '',
    redirectTo: '/home',
    terminal: true
  },
  {path: 'home', component: GraphQLComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
