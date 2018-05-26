import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OintyApiProvider, ShoppingList } from '../../providers/ointy-api/ointy-api';
import { TAGS } from '../../providers/ointy-api/ointy-api';

/**
 * Generated class for the ShoppinglistsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'detail/:id'
})
@Component({
  selector: 'page-shoppinglists',
  templateUrl: 'shoppinglists.html',
})
export class ShoppinglistsPage {
  public shoppingList: ShoppingList;

  public newItem: string;

  public TAGS = {
    GROCERY_STORE: {
      name: "Grocery Store",
      icon: ""
    },
    BAKERY: {
      name: "Bakery",
      icon: ""
    },
    PHARMACY: {
      name: "Pharmacy",
      icon: ""
    },
    HARDWARE_STORE: {
      name: "Hardware Store",
      icon: ""
    },
    SEX_SHOP: {
      name: "Sex Shop",
      icon: ""
    },
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private ointy: OintyApiProvider) {
    ointy.loadShoppingList(navParams.get('id')).subscribe(shoppingList => {
      console.log(shoppingList);
      this.shoppingList = shoppingList;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppinglistsPage');
  }

  addItem() {
    this.shoppingList.items.push(this.newItem);

    this.newItem = "";
  }
}
