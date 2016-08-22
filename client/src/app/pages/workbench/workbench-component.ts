import {Component, OnInit} from '@angular/core';
import {DataTableModule,SharedModule} from 'primeng/primeng';
let style = require('!!raw!sass!./views/workbench.scss');

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
})

export class WorkBenchComponent implements OnInit {
  
  public cars:Array<Car>;
  public cols:Array<any>;
  constructor() {
    this.cars = [
        {"vin":"a1653d4d","brand":"VW","year":1998,"color":"White"},
        {"vin":"ddeb9b10","brand":"Mercedes","year":1985,"color":"Green"},
        {"vin":"d8ebe413","brand":"Jaguar","year":1979,"color":"Silver"},
        {"vin":"aab227b7","brand":"Audi","year":1970,"color":"Black"},
        {"vin":"631f7412","brand":"Volvo","year":1992,"color":"Red"},
        {"vin":"7d2d22b0","brand":"VW","year":1993,"color":"Maroon"},
        {"vin":"50e900ca","brand":"Fiat","year":1964,"color":"Blue"},
        {"vin":"4bbcd603","brand":"Renault","year":1983,"color":"Maroon"},
        {"vin":"70214c7e","brand":"Renault","year":1961,"color":"Black"},
        {"vin":"ec229a92","brand":"Audi","year":1984,"color":"Brown"},
        {"vin":"1083ee40","brand":"VW","year":1984,"color":"Silver"},
        {"vin":"6e0da3ab","brand":"Volvo","year":1987,"color":"Silver"},
        {"vin":"5aee636b","brand":"Jaguar","year":1995,"color":"Maroon"},
        {"vin":"7cc43997","brand":"Jaguar","year":1984,"color":"Orange"},
        {"vin":"88ec9f66","brand":"Honda","year":1989,"color":"Maroon"},
        {"vin":"f5a4a5f5","brand":"BMW","year":1986,"color":"Blue"},
        {"vin":"15b9a5c9","brand":"Mercedes","year":1986,"color":"Orange"},
        {"vin":"f7e18d01","brand":"Mercedes","year":1991,"color":"White"},
        {"vin":"cec593d7","brand":"VW","year":1992,"color":"Blue"},
        {"vin":"d5bac4f0","brand":"Renault","year":2001,"color":"Blue"},
        {"vin":"56b527c8","brand":"Jaguar","year":1990,"color":"Yellow"},
        {"vin":"1ac011ff","brand":"Audi","year":1966,"color":"Maroon"},
        {"vin":"fc074185","brand":"BMW","year":1962,"color":"Blue"},
        {"vin":"606ba663","brand":"Honda","year":1982,"color":"Blue"},
        {"vin":"d05060b8","brand":"Mercedes","year":2003,"color":"Silver"},
        {"vin":"46e4bbe8","brand":"Mercedes","year":1986,"color":"White"},
        {"vin":"c29da0d7","brand":"BMW","year":1983,"color":"Brown"},
        {"vin":"24622f70","brand":"VW","year":1973,"color":"Maroon"},
        {"vin":"7f573d2c","brand":"Mercedes","year":1991,"color":"Red"},
        {"vin":"b69e6f5c","brand":"Jaguar","year":1993,"color":"Yellow"},
        {"vin":"ead9bf1d","brand":"Fiat","year":1968,"color":"Maroon"},
        {"vin":"bc58113e","brand":"Renault","year":1981,"color":"Silver"},
        {"vin":"2989d5b1","brand":"Honda","year":2006,"color":"Blue"},
        {"vin":"c243e3a0","brand":"Fiat","year":1990,"color":"Maroon"},
        {"vin":"e3d3ebf3","brand":"Audi","year":1996,"color":"White"},
        {"vin":"45337e7a","brand":"Mercedes","year":1982,"color":"Blue"},
        {"vin":"36e9cf7e","brand":"Fiat","year":2000,"color":"Orange"},
        {"vin":"036bf135","brand":"Mercedes","year":1973,"color":"Black"},
        {"vin":"ad612e9f","brand":"Mercedes","year":1975,"color":"Red"},
        {"vin":"97c6e1e9","brand":"Volvo","year":1967,"color":"Green"},
        {"vin":"ae962274","brand":"Volvo","year":1982,"color":"Red"},
        {"vin":"81f8972a","brand":"BMW","year":2007,"color":"Black"},
        {"vin":"f8506743","brand":"Audi","year":1975,"color":"Blue"},
        {"vin":"596859d1","brand":"Fiat","year":2002,"color":"Green"},
        {"vin":"d83c1d9a","brand":"Volvo","year":1972,"color":"Black"},
        {"vin":"32f41550","brand":"Mercedes","year":1978,"color":"Brown"},
        {"vin":"c28cd2e4","brand":"Volvo","year":1982,"color":"Silver"},
        {"vin":"80890dcc","brand":"Audi","year":1962,"color":"White"},
        {"vin":"4bf1aeb5","brand":"VW","year":2000,"color":"Silver"},
        {"vin":"45ca4786","brand":"BMW","year":1995,"color":"Maroon"}
      ];
  
  }
  
  ngOnInit() {

  }
  
}
