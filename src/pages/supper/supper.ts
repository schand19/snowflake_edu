import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SupperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supper',
  templateUrl: 'supper.html',
})
export class SupperPage implements OnInit{

  supperItems: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getSupperItems();
  }

  getSupperItems (){
    this.supperItems = ['Punugulu', 'Mirchi Bajji', 'Palli Chatni']
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupperPage');
  }

}
