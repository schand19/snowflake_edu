import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DinnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dinner',
  templateUrl: 'dinner.html',
})
export class DinnerPage implements OnInit{

  dinnerItems: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getDinnerItems();
  }

  getDinnerItems (){
    this.dinnerItems = ['Biryani Rice', 'Plain Rice', 'Papad', 'Sambar', 'Palakura Pappu', 'Mango Pickle', 'Gutti Vankaya', 'Semiya']
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DinnerPage');
  }

}
