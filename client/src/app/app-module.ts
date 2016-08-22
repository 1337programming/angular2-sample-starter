import {BrowserModule}                from '@angular/platform-browser';
import {ReactiveFormsModule}          from '@angular/forms';
import {NgModule}                     from '@angular/core';
import {FormsModule}                  from '@angular/forms';

import {AppComponent}                 from './app-component';
import {routing}                       from './routes';
import {HttpModule}                   from '@angular/http';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';


import {GraphQLComponent} from './pages/graphql-sample/graphql-sample-component';
import {LoginComponent} from './pages/login/login-component';
import {WorkBenchComponent} from './pages/workbench/workbench-component';
import {FooterComponent} from './common/components/footer/footer-component';
import {NavbarComponent} from './common/components/navbar/navbar-component';
import {DataTableModule,SharedModule} from 'primeng/primeng';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, routing, FormsModule,
    HttpModule, DataTableModule,SharedModule],
  declarations: [AppComponent, GraphQLComponent, LoginComponent,
    WorkBenchComponent],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}