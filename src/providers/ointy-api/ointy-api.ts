import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the OintyApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OintyApiProvider {

  host: string = "http://localhost:8080";
  // host: string = "http://172.16.60.245:8080";
  userId: number = 1;

  constructor(private http: HttpClient) {
    console.log('Hello OintyApiProvider Provider');
  }

  shoppinglistsLoad() {
    return this.http.get<Array<ShoppingList>>(`${this.host}/${this.userId}/shoppingList`);
  }

  loadShoppingList(shoppinglistId: number) {
    return this.http.get<ShoppingList>(`${this.host}/shoppingList/${shoppinglistId}`);
  }

  addItemToShoppingList(shoppinglistId: number, itemName: string) {
    this.http.post(`${this.host}/shoppingList/${shoppinglistId}/item`,itemName).subscribe();
  }

  getListsRelevantForUser(latitude: number, longitude: number) {
    return this.http.get<Array<ShoppingList>>(`${this.host}/getListsRelevantForUser/${this.userId}/${latitude}/${longitude}`);
  }

  removeItemByIndex(shoppinglistId: number, index: number) {
    this.http.delete(`${this.host}/shoppingList/${shoppinglistId}/item/${index}`).subscribe();
  }

  getClaimedShoppingList() {
    return this.http.get<Array<ShoppingList>>(`${this.host}/getClaimedShoppingList/${this.userId}`);
  }

  closeShoppingList(id: number) {
    return this.http.post(`${this.host}/closeShoppingList/${id}`, {});
  }

  claimShoppingList(id: number) {
    return this.http.post(`${this.host}/claimShoppingList/${id}/${this.userId}`, {});
  }
}

export interface ShoppingList {
  id: number,
  owner: {
    id: number,
    firstName: string,
    lastName: string,
    address: Address,
  },
  bounty: number,
  tag: string,
  items: Array<string>,
}

export const TAGS = {
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
}

export interface Address {
  latitude: number,
  longitude: number,
  zip: number,
  city: string,
  street: string,
  houseNumber: string
}
