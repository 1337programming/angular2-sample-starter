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
import {RecordComponent} from './pages/workbench/components/record/record-component';
import {ReviewComponent} from './pages/workbench/components/review/review-component';
import {
  DataTableModule, SharedModule, CalendarModule, AutoCompleteModule,
  DropdownModule, DialogModule, ButtonModule
} from 'primeng/primeng';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, routing, FormsModule, DropdownModule,
    HttpModule, DataTableModule, SharedModule, CalendarModule, AutoCompleteModule, DialogModule, ButtonModule],
  declarations: [AppComponent, GraphQLComponent, LoginComponent,
    WorkBenchComponent, RecordComponent, ReviewComponent],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}