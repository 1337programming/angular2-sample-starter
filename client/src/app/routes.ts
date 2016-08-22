import {Routes, RouterModule}   from '@angular/router';
import {GraphQLComponent} from './pages/graphql-sample/graphql-sample-component';
import {LoginComponent} from './pages/login/login-component';
import {WorkBenchComponent} from './pages/workbench/workbench-component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    terminal: true
  },
  {path: 'sample', component: GraphQLComponent},
  {path: 'login', component: LoginComponent},
  {path: 'workbench', component: WorkBenchComponent}
];

export const routing = RouterModule.forRoot(routes);