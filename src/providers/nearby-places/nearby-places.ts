import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

/*
  Generated class for the NearbyPlacesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NearbyPlacesProvider {

  private API_KEY = "AIzaSyDY1cPfXT1w_iywCZFFMuXFkPm3K3XDT-c";

  private interval;

  constructor(public http: HttpClient, private geolocation: Geolocation) {
    console.log('Hello NearbyPlacesProvider Provider');

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

      return this.http.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${this.API_KEY}&location=${resp.coords.latitude},${resp.coords.longitude}&radius=100&rankby=distance`).toPromise()
     }).then(data => {
       console.log(data);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
