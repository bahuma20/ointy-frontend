import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the OintyApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OintyApiProvider {

  host: string = "172.16.60.245:8080";

  constructor(public http: HttpClient) {
    console.log('Hello OintyApiProvider Provider');
  }

  loadRelevantShoppinglists() {

  }

}
