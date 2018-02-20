import { Component,OnInit } from '@angular/core';
import { NavController, Platform, Events ,NavParams} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';
import { FindschoolPage } from '../findschool/findschool';
import {SchoolDiaryPage} from '../school-diary/school-diary';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userType: string;
  parentMenu:boolean;
  teacherMenu:boolean;
  adminMenu:boolean;
  driverMenu:boolean;
  constructor(public platform: Platform, public navParams: NavParams, public navCtrl: NavController, public events: Events) {
    this.userType = navParams.get('userType');
    events.subscribe('logout', () => {
      this.logout();
    });

    events.subscribe('goToMyProfilePage', () => {
      this.goToMyProfilePage();
    });
  }

  goToMyProfilePage(){
    this.navCtrl.push(ProfilePage);
  }

  ngOnInit(){

    console.log("usertype in dashboard:", this.userType);
    if (this.userType == "Parent"){
      this.parentMenu= true;
    } else if(this.userType == "Teacher"){
      this.teacherMenu= true;
    } else if(this.userType == "Admin"){
      this.adminMenu= true;
    } else if(this.userType == "Driver"){
      this.driverMenu= true;
    }
  }
  logout() {
    this.navCtrl.push(FindschoolPage);
  }

  onClickDiary(userType){
    if (userType == "Parent"){
    }else if (userType == "Teacher"){
      
    }
    this.navCtrl.push(SchoolDiaryPage, {userType: this.userType});
  }

}
