import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShoppinglistsPage } from '../shoppinglists/shoppinglists';
import { Geolocation } from '@ionic-native/geolocation';
import { OintyApiProvider, ShoppingList } from '../../providers/ointy-api/ointy-api';

import { TAGS } from '../../providers/ointy-api/ointy-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public shoppingLists: Array<ShoppingList>;

  public TAGS = {
    GROCERY_STORE: {
      name: "Grocery Store",
      icon: "cart"
    },
    BAKERY: {
      name: "Bakery",
      icon: "pizza"
    },
    PHARMACY: {
      name: "Pharmacy",
      icon: "medkit"
    },
    HARDWARE_STORE: {
      name: "Hardware Store",
      icon: "hammer"
    },
    SEX_SHOP: {
      name: "Sex Shop",
      icon: ""
    },
  };

  constructor(public navCtrl: NavController, private geolocation: Geolocation, private ointy: OintyApiProvider) {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude, resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });

     ointy.shoppinglistsLoad().subscribe(data => {
      this.shoppingLists = data;
    });
  }

  public gotoList(id: number) {
    this.navCtrl.push(ShoppinglistsPage, {
      id: id
    });
  }

}
