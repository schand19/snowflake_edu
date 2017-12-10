import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FindschoolPage } from '../findschool/findschool';
import { HomePage } from '../home/home';


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
  selectedSchool:string;
  userName:string;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedSchool  = navParams.get('selectedSchool');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage', this.selectedSchool);
  }

  getMeToFindSchool(){
    this.navCtrl.push(FindschoolPage);
  }

  login(){
    if(this.userName && this.userName === 'Admin' && this.password && this.password === "P@ssword"){
      this.navCtrl.push(HomePage);
    }
  }
}
