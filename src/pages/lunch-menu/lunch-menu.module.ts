import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LunchMenuPage } from './lunch-menu';

@NgModule({
  declarations: [
    LunchMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(LunchMenuPage),
  ]
})
export class LunchMenuPageModule {}
