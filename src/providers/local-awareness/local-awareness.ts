import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { OintyApiProvider } from '../ointy-api/ointy-api';

/*
  Generated class for the LocalAwarenessProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalAwarenessProvider {

  private interval;

  constructor(public http: HttpClient, private geolocation: Geolocation, private ointy: OintyApiProvider) {
    console.log('Hello LocalAwarenessProvider Provider');

    this.startChecking();
  }

  public startChecking() {
    this.interval = setInterval(this.check, 60 * 60 * 1000);
    this.check();
  }

  public stopChecking() {
    clearInterval(this.interval);
  }

  public check() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude, resp.coords.longitude);

      return this.ointy.getListsRelevantForUser(resp.coords.latitude, resp.coords.longitude).toPromise()
     }).then(data => {
       console.log(data);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
