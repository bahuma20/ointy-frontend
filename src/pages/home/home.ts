import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShoppinglistsPage } from '../shoppinglists/shoppinglists';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goto(path: string) {
    switch(path) {
      case "shoppinglists":
        this.navCtrl.push(ShoppinglistsPage);
    }
  }

}
