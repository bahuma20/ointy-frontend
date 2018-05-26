import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OintyApiProvider, ShoppingList } from '../../providers/ointy-api/ointy-api';

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


  shoppingList: ShoppingList = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ointy: OintyApiProvider) {
    // ointy.loadShoppingListData(navParams.get('id')).then(data => {
    //   this.items = data.items;
    //   this.shoppingList = data.shoppingList;
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppinglistsPage');
  }

  addItem() {
    // this.items.push({
    //   id: 123,
    //   name: this.newItem,
    // });

    // this.newItem = "";
  }
}
