import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppinglistsPage } from './shoppinglists';

@NgModule({
  declarations: [
    ShoppinglistsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppinglistsPage),
  ],
})
export class ShoppinglistsPageModule {}
