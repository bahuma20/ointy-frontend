import { Injectable } from '@angular/core';

/*
  Generated class for the OintyApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OintyApiProvider {

  host: string = "172.16.60.245:8080";
  userId: number = 1;

  constructor() {
    console.log('Hello OintyApiProvider Provider');
  }

  shoppinglistsLoad() {
    return new Promise<Array<ShoppingList>>((resolve, reject) => {
      resolve([
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
      ])
    })
  }

  loadShoppingListData(id: number) {
    return new Promise<ShoppingListData>((resolve, reject) => {
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
  id: number;
  name: string;
  tag: string;
  icon: string;
}

export interface ShoppingListItem {
  id: number;
  name: string;
}

export interface ShoppingListData {
  shoppingList: ShoppingList,
  items: Array<ShoppingListItem>,
}
