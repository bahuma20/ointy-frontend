import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShoppinglistsPage } from '../shoppinglists/shoppinglists';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public shoppingLists: Array<ShoppingList>;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude, resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });

     this.shoppingLists = [
       {
         id: 1,
         name: "Grocery Store",
         tag: "grocery_store",
         icon: "cart",
       },
       {
        id: 2,
        name: "Pharmacy",
        tag: "pharmacy",
        icon: "medkit",
      },
     ]
  }

  public gotoList(id: number) {
    return id;
    // switch(path) {
    //   case "shoppinglists":
    //     this.navCtrl.push(ShoppinglistsPage);
    // }
  }

}


interface ShoppingList {
  id: number;
  name: string;
  tag: string;
  icon: string;
}
