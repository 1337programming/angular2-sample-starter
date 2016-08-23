import {Routes, RouterModule}   from '@angular/router';
import {GraphQLComponent} from './pages/graphql-sample/graphql-sample-component';
import {LoginComponent} from './pages/login/login-component';
import {WorkBenchComponent} from './pages/workbench/workbench-component';
import {RecordComponent} from './pages/workbench/components/record/record-component';
import {ReviewComponent} from './pages/workbench/components/review/review-component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    terminal: true
  },
  {path: 'sample', component: GraphQLComponent},
  {path: 'login', component: LoginComponent},
  {path: 'workbench', children: [
    {path : '' , component:WorkBenchComponent},
    {path: 'record/:id', component: RecordComponent},
    {path : 'review', component : ReviewComponent, data : {data: 'Default'}}
  ]}
];

export const routing = RouterModule.forRoot(routes);