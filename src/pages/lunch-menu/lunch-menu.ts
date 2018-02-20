import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the LunchMenuPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lunch-menu',
  templateUrl: 'lunch-menu.html'
})
export class LunchMenuPage implements OnInit  {

  foodMenu: {};
  lunchRoot = 'LunchPage'
  breakfastRoot = 'BreakfastPage'
  supperRoot = 'SupperPage'
  dinnerRoot = 'DinnerPage'
  constructor() {
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
