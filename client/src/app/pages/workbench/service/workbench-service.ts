import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from "rxjs/Rx";

@Injectable()
export class WorkBenchService {
  
  private records:Array<any>;
  constructor(private http:Http) {
    this.records = [];
  }
  
  public setRecords(records):void {
    this.records = records;
  }
  
  public getRecords():Array<any> {
    return this.records;
  }
}