import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {SelectItem} from 'primeng/primeng';
import {WorkBenchService} from './service/workbench-service';
let style = require('!!raw!sass!./views/workbench.scss');

import {Cars, Countries} from './data/random-data';

export interface Car {
  vin;
  year;
  brand;
  color;
}

@Component({
  selector: 'workbench',
  template: require('./views/workbench.html'),
  styles: [style],
  directives: [ROUTER_DIRECTIVES],
  providers: [WorkBenchService]
})

export class WorkBenchComponent {
  
  private columnOptions: SelectItem[];
  private country: any;
  private countries: any[];
  private filteredCountriesSingle: any[];
  private filteredCountriesMultiple: any[];
  public cols: Array<any>;
  public cars: Array<Car>;
  
  constructor(private workBenchService: WorkBenchService) {
    this.cars = Cars;
    
    this.cols = [
      {field: 'vin', header: 'Vin (startsWith)', filterMatchMode: null},
      {field: 'year', header: 'Year (contains)', filterMatchMode: 'contains'},
      {field: 'brand', header: 'Brand (startsWith)', filterMatchMode: null},
      {field: 'color', header: 'Color (endsWith)', filterMatchMode: 'endsWith'}
    ];
    
    this.columnOptions = [];
    for (let i = 0; i < this.cols.length; i++) {
      this.columnOptions.push({label: this.cols[i].header, value: this.cols[i]});
    }
    
  }
  
  public filterCountryMultiple(event) {
    let query = event.query;
    this.filteredCountriesMultiple = this.filterCountry(query, Countries);
  }
  
  private filterCountry(query, countries: any[]): any[] {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    for (let i = 0; i < countries.length; i++) {
      let country = countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    return filtered;
  }
  
}
