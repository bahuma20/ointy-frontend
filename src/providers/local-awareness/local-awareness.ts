import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { OintyApiProvider, ShoppingList } from '../ointy-api/ointy-api';
import { Observable } from "rxjs/Observable"

/*
  Generated class for the LocalAwarenessProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalAwarenessProvider {

  private interval;

  private callback: Function;

  constructor(public http: HttpClient, private geolocation: Geolocation, private ointy: OintyApiProvider) {
    console.log('Hello LocalAwarenessProvider Provider');

    this.startChecking();
  }

  setCallback(callback: Function) {
    this.callback = callback;
  }

  public startChecking() {
    return new Observable<Array<ShoppingList>>((observer) => {
      let checking = () => {
        this.geolocation.getCurrentPosition().then((resp) => {
          console.log(resp.coords.latitude, resp.coords.longitude);
          // return this.ointy.getListsRelevantForUser(resp.coords.latitude, resp.coords.longitude).toPromise()
          return this.ointy.getListsRelevantForUser(49.0334298,11.5804938).toPromise()
        }).then(data => {
          console.log(data);

          if (data.length > 0) {
            observer.next(data);
          }
        }).catch((error) => {
          console.log('Error getting location', error);
        });
      }

      this.interval = setInterval(checking, 60 * 1000);

      checking();
    });
  }

  public stopChecking() {
    clearInterval(this.interval);
  }

  public check() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude, resp.coords.longitude);


      // return this.ointy.getListsRelevantForUser(resp.coords.latitude, resp.coords.longitude).toPromise()
      return this.ointy.getListsRelevantForUser(49.0334298,11.5804938).toPromise()
    }).then(data => {
      console.log(data);

      if (data.length > 0) {
        this.callback(data);
      }
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
}
