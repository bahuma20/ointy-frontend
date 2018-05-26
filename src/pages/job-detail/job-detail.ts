import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingList, OintyApiProvider, Address } from '../../providers/ointy-api/ointy-api';

/**
 * Generated class for the JobDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'job/:id'
})
@Component({
  selector: 'page-job-detail',
  templateUrl: 'job-detail.html',
})
export class JobDetailPage {
  public shoppingList: ShoppingList;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ointy: OintyApiProvider) {
    ointy.loadShoppingList(navParams.get('id')).subscribe(shoppingList => {
      console.log(shoppingList);
      this.shoppingList = shoppingList;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobDetailPage');
  }

  getStaticMap(address: Address) {
    if (!address) {
      return '';
    }


    let addressString = `${address.street} ${address.houseNumber}, ${address.zip} ${address.city}`;

    return `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(addressString)}&zoom=15&scale=1&size=400x250&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C${encodeURIComponent(addressString)}`;
  }

}
