import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FindschoolPage } from '../pages/findschool/findschool';
import { HomePage } from '../pages/home/home';
import {Storage} from '@ionic/Storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

 
  rootPage: any;
  userType : string;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public events: Events, public navCtrl: MenuController,public storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Find School', component: FindschoolPage }
    ];

  }

  initializeApp() {
  
    this.platform.ready().then(() => {
      this.storage.get("userType").then(data=>{
        this.userType = data;
        if(this.userType) {
          console.log("initializeApp with userType",this.userType);
              this.rootPage = HomePage; 
          }else{
            console.log("initializeApp without userType",this.userType);
              this.rootPage = FindschoolPage; 
          }
      })
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goToMyProfilePage(){
    this.events.publish('goToMyProfilePage');
  }
  
  logout() {
    this.events.publish('logout');
    this.storage.clear();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
