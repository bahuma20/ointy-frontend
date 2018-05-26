import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShoppinglistsPage } from '../shoppinglists/shoppinglists';
import { Geolocation } from '@ionic-native/geolocation';
import { OintyApiProvider, ShoppingList, Address } from '../../providers/ointy-api/ointy-api';

import { TAGS } from '../../providers/ointy-api/ointy-api';
import { LocalAwarenessProvider } from '../../providers/local-awareness/local-awareness';
import { JobDetailPage } from '../job-detail/job-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public shoppingLists: Array<ShoppingList>;

  public localShoppingLists: ShoppingList[];

  public claimedShoppingList: ShoppingList;

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

  constructor(public navCtrl: NavController, private ointy: OintyApiProvider, private localAwareness: LocalAwarenessProvider) {
    ointy.shoppinglistsLoad().subscribe(data => {
      this.shoppingLists = data;
    });

    ointy.getClaimedShoppingList().subscribe(data => {
      this.claimedShoppingList = data;
    });


    localAwareness.setCallback(this.onLocalShoppinglist)

    localAwareness.startChecking();
  }

  public gotoList(id: number) {
    this.navCtrl.push(ShoppinglistsPage, {
      id: id
    });
  }

  public gotoListDetail(id: number) {
    this.navCtrl.push(JobDetailPage, {
      id: id
    });
  }

  public onLocalShoppinglist(data: Array<ShoppingList>) {
    this.localShoppingLists = data;
  }

  public closeShoppingList(id: number) {
    this.ointy.closeShoppingList(id).subscribe(()=>{
      console.log('list closed');
    });
  }

  public getStaticMap(address: Address) {
    if (!address) {
      return '';
    }


    let addressString = this.getAddressUriComponent(address);

    return `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(addressString)}&zoom=15&scale=1&size=400x250&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C${encodeURIComponent(addressString)}`;
  }

  public getAddressUriComponent(address: Address) {
    if (!address) {
      return '';
    }

    let addressString = `${address.street} ${address.houseNumber}, ${address.zip} ${address.city}`;

    return addressString;
  }

}
