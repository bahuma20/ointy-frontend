import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the OintyApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OintyApiProvider {

  host: string = "http://172.16.60.245:8080";
  userId: number = 1;

  constructor(public http: Http) {
    console.log('Hello OintyApiProvider Provider');
  }

  shoppinglistsLoad() {
    return this.http.get(`${this.host}/${this.userId}/shoppingList`);
  }

  loadShoppingListData(id: number) {
    return new Promise<ShoppingList>((resolve, reject) => {
      resolve({
        shoppingList: {
          id: 1,
          name: "Grocery Store",
          tag: "grocery_store",
          icon: "cart",
        },
        items: [
          {
            id: 1,
            name: "Butter"
          },
          {
            id: 2,
            name: "Käse"
          },
          {
            id: 3,
            name: "Milch"
          },
        ]
      })
    })
  }

  loadRelevantShoppinglists() {

  }

}

export interface ShoppingList {
  id: number,
  owner: {
    id: number,
    firstName: string,
    lastName: string,
    address: {
      latitude: number,
      longitude: number,
      zip: number,
      city: string,
      street: string,
      houseNumber: string
    },
  },
  bounty: number,
  tag: string,
  items: Array<string>,
}
