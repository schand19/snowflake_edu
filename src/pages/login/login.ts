import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FindschoolPage } from '../findschool/findschool';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  selectedSchool;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedSchool  = navParams.get('selectedSchool');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage', this.selectedSchool);
  }

  getMeToFindSchool(){
    this.navCtrl.push(FindschoolPage);
  }
}
