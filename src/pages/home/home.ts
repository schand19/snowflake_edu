import { Component } from '@angular/core';
import { NavController, Platform, Events } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public platform: Platform, public navCtrl: NavController, public events: Events) {
    events.subscribe('logout', () => {
      this.logout();
    });
  }

  logout() {
    this.navCtrl.push(LoginPage);
  }

}
