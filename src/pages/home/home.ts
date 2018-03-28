import { Component } from '@angular/core';
import { NavController, Platform, Events, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { AttendancePage } from '../attendance/attendance';
import { FindschoolPage } from '../findschool/findschool';
import { SchoolDiaryPage } from '../school-diary/school-diary';
import { ImageGalleryPage } from '../image-gallery/image-gallery';
import { LunchMenuPage } from '../lunch-menu/lunch-menu';
import { ResultsPage } from '../results/results';
import { AnnouncementsPage } from '../announcements/announcements';
import { Storage } from '@ionic/Storage';
import { HolidayCalenderPage } from '../holiday-calender/holiday-calender';
import { ViewAttendancePage } from '../view-attendance/view-attendance';
import { FeesPage } from '../fees/fees';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userType: string;

  constructor(public platform: Platform, public navParams: NavParams, public navCtrl: NavController, public events: Events, public storage: Storage) {

    events.subscribe('logout', () => {
      this.logout();
    });

  }

  takeAttendance() {
    this.navCtrl.push(AttendancePage);
  }

  openFeesPage() {
    this.navCtrl.push(FeesPage);
  }

  openProfilePage() {
    this.navCtrl.push(ProfilePage);
  }

  ngOnInit() {
    this.storage.get("userType").then(userType => {
      this.userType = String(userType);
      console.log("usertype in dashboard:", this.userType);
    })
  }

  logout() {
    this.storage.forEach( item => {
      console.log(item);
    })
    this.navCtrl.push(FindschoolPage);
  }

  onClickDiary(userType) {
    this.navCtrl.push(SchoolDiaryPage, { userType: this.userType });
  }

  onClickImageGallery() {
    this.navCtrl.push(ImageGalleryPage);
  }

  goToLunchMenu() {
    this.navCtrl.push(LunchMenuPage);
  }

  goToResults(eve) {
    this.navCtrl.push(ResultsPage);
  }

  onClickAnnouncements() {
    this.navCtrl.push(AnnouncementsPage, { userType: this.userType });
  }

  onClickHoldiayCalender() {
    this.navCtrl.push(HolidayCalenderPage);
  }

  viewAttendance() {
    this.navCtrl.push(ViewAttendancePage, { userType: this.userType });
  }
}
