import {Component} from '@angular/core';
import {ActivatedRoute, Router, ROUTER_DIRECTIVES} from '@angular/router';
import {MockRecords} from './data/records-mock';
import {WorkBenchService} from '../../service/workbench-service';
let style = require('!!raw!sass!./views/record.scss');

@Component({
  selector: 'record',
  template: require('./views/record.html'),
  styles: [style],
  directives: [ROUTER_DIRECTIVES],
  providers: [WorkBenchService]
})

export class RecordComponent {
  
  public PONum: string;
  public records:Array<any>;
  public ssaOptions;
  private display:boolean;
  
  constructor(private activeRoute: ActivatedRoute, private router:Router, private workBenchService: WorkBenchService) {
    this.records = MockRecords;
    this.PONum = activeRoute.snapshot.params['id'];
    this.ssaOptions = ['item 1', 'item 2', 'item 3'];
    this.display = false;
  }
  
  public createSample() {
    this.workBenchService.setRecords(this.records);
    this.router.navigate(['/workbench/review']);
  }
  
  private showDialog() {
    this.display = true;
  }
  
}
