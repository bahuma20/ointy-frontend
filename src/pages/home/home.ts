import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShoppinglistsPage } from '../shoppinglists/shoppinglists';
import { Geolocation } from '@ionic-native/geolocation';
import { OintyApiProvider, ShoppingList } from '../../providers/ointy-api/ointy-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public shoppingLists: Array<ShoppingList>;

  constructor(public navCtrl: NavController, private geolocation: Geolocation, private ointy: OintyApiProvider) {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude, resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });

     ointy.shoppinglistsLoad().subscribe(lists => {
      this.shoppingLists = lists;
     });
  }

  public gotoList(id: number) {
    this.navCtrl.push(ShoppinglistsPage, {
      id: id
    });
  }

}
