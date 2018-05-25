import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShoppinglistsPage } from '../shoppinglists/shoppinglists';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude, resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  goto(path: string) {
    switch(path) {
      case "shoppinglists":
        this.navCtrl.push(ShoppinglistsPage);
    }
  }

}
