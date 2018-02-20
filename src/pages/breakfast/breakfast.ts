import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BreakfastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-breakfast',
  templateUrl: 'breakfast.html',
})
export class BreakfastPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BreakfastPage');
  }

  breakfastItems: string[];

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getBreakfastItems();
  }

  getBreakfastItems() {
    this.breakfastItems = ['Idli', 'Pally Chatni', 'Vada', 'Sambar']
  }

}
