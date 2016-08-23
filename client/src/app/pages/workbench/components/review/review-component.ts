import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {WorkBenchService} from '../../service/workbench-service';
import {MockReview} from './data/mock-review';
let style = require('!!raw!sass!./views/review.scss');

@Component({
  selector: 'review',
  template: require('./views/review.html'),
  styles: [style],
  providers: [WorkBenchService]
})

export class ReviewComponent implements OnInit, OnDestroy {
  
  private subscription: Subscription;
  private records:Array<any>;
  
  constructor(private route: ActivatedRoute, private workBenchService: WorkBenchService) {
    this.records = workBenchService.getRecords();
  }
  
  ngOnInit() {
    this.subscription = this.route.data.subscribe((data) => {
      console.log(data);
    });
    this.route.params.subscribe((res:any) => {
      console.log(res);
    })
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  
}
