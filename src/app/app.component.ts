import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FindschoolPage } from '../pages/findschool/findschool';
import { HomePage } from '../pages/home/home';
import { HolidayCalenderPage } from '../pages/holiday-calender/holiday-calender';

import { Storage } from '@ionic/Storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = FindschoolPage;
  activePage: any;

  userRole: string;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public events: Events, public navCtrl: MenuController, public storage: Storage) {

    if(storage.get('auth_token')){
      this.rootPage = HomePage;
    }
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Holiday Calender', component: HolidayCalenderPage },
      { title: 'Log Out', component: FindschoolPage }
    ];
    this.activePage = this.pages[0];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.storage.get("userRole").then(data => {
        this.userRole = data;
        if (this.userRole) {
          console.log("initializeApp with userRole", this.userRole);
          this.rootPage = HomePage;
        } else {
          console.log("initializeApp without userRole", this.userRole);
          this.rootPage = FindschoolPage;
        }
      })

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  checkActive(page) {
    return page = this.activePage;
  }
}
