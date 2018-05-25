import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShoppinglistsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shoppinglists',
  templateUrl: 'shoppinglists.html',
})
export class ShoppinglistsPage {

  items: Array<string> = [];

  newItem: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items.push("Item 1");
    this.items.push("Item 2");
    this.items.push("Item 3");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppinglistsPage');
  }

  addItem() {
    this.items.push(this.newItem);
    this.newItem = "";
  }
}
