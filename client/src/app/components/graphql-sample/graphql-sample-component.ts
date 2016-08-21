import {Component} from '@angular/core';
import {Response,} from '@angular/http';
import {GraphQLService} from './service/graphql-sample-service';
import {QueryOptions} from './query-options';
import {MapToIterable} from './pipes/iterable-pipe';
import {PrettyPrintPipe} from './pipes/pretty-json';
let FullPayLoad = require('./full-payload.json');
let style = require('!!raw!sass!./graphql-sample.scss');

@Component({
  selector: 'home',
  template: require('./graphql-sample.html'),
  styles: [style],
  providers: [GraphQLService],
  pipes: [MapToIterable, PrettyPrintPipe]
})

export class GraphQLComponent {
  
  public error:any;
  public todos:Array<string>;
  public user:any;
  public product:any;
  public queryUserOptions:any;
  public queryProductOptions:any;
  public fullPayLoad:any;
  public showFullPayLoad:boolean;
  
  constructor(private graphQLService:GraphQLService) {
    this.user = {};
    this.product = {};
    this.todos = [];
    this.getTodos();
    this.queryUserOptions = QueryOptions.user;
    this.queryProductOptions = QueryOptions.product;
    this.fullPayLoad = FullPayLoad;
    this.showFullPayLoad = false
  }
  
  private getTodos():void {
    this.graphQLService.queryTodos('{items}').map((res:Response) => res.json())
      .subscribe(
        (res:any) => this.todos = res.data.items,
        (error:any) => {
          this.error = error;
          console.log('ERROR');
        }
      );
  }
  
  private getUser(id:string):void {
    let query:string = this.queryBuilder(id, 'user');
    this.graphQLService.queryUsers(query).map((res:Response) => res.json())
      .subscribe(
        (res:any) => {
          if (res.data) {
            this.user = res.data.user
          } else {
            this.user = {};
            this.error = 'Error Getting User';
          }
        },
        (error:any) => this.error = error
      );
  }
  
  private getProduct(id:string):void {
    console.log(this.queryProductOptions);
    let query:string = this.queryBuilder(id, 'product');
    this.graphQLService.queryProducts(query).map((res:Response) => res.json())
      .subscribe(
        (res:any) => {
          if (res.data) {
            this.product = res.data.product
          } else {
            this.product = {};
            this.error = 'Error Getting Product';
          }
        },
        (error:any) => this.error = error
      );
  }
  
  private addTodo(item:string):void {
    let queryStr = `mutation _ {item: addItem(item:"${item}")}`;
    this.graphQLService.queryTodos(queryStr).map((res:Response) => res.json()).subscribe((res:any) => {
      if (res.data.item === item) {
        this.getTodos();
      } else {
        this.error = 'Error adding todo';
      }
    });
  }
  
  private toggleFullPayLoad() {
    this.showFullPayLoad = !this.showFullPayLoad;
  }
  
  private queryBuilder(id:string, type:string):string {
    let params = [];
    let queryOptions, queryParam, identifier;
    if (type === 'user') {
      queryOptions = this.queryUserOptions;
      queryParam = 'user';
    } else {
      queryOptions = this.queryProductOptions;
      queryParam = 'product';
    }
    for (let key in queryOptions) {
      if (queryOptions[key]) {
        params.push(key);
      }
    }
    let query:string = `{
      ${queryParam}(id: "${id}") {`;
    for (let i = 0; i < params.length; i++) {
      query += params[i];
      if (params.length > 0 && i < params.length - 1) {
        query += ',';
      }
    }
    query += `}}`;
    return query;
  }
}
