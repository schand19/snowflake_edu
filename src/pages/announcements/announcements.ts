import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AnnouncementsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-announcements',
  templateUrl: 'announcements.html',
})
export class AnnouncementsPage {
  userType: string;
  schoolAnnouncementObject = [];
  parentAnnouncementView: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userType = navParams.get('userType');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnouncementsPage');
    this.onAnnouncementLoad();

  }
  
  onAnnouncementLoad() {
    if (this.userType == 'Parent') {
      this.schoolAnnouncementObject = [{
        date: "10-11-2018",
        From: "Principal",
        description: "School will be remained closed from 13th to 15th Jan on occation of Pongal"
      }, {
        date: "18-05-2018",
        From: "Chairmen",
        description: "Parent teacher meeting on 20th Jan. Request all the parents to be present and meet their respective teachers"
      }, {
        date: "11-06-2018",
        From: "School Management",
        description: "Flag hoisting on the Occation of Republic day 26th Jan. Request all the parent and Children to be present."
      },
      {
        date: "15-11-2018",
        From: "Principal",
        description: "School will be remain closed today (18th Feb) due to party call on Bund."
      }];
    }
    if (this.userType == 'Teacher') {
      this.schoolAnnouncementObject = [
        {
          date: "10-11-2018",
          From: "Principal",
          description: "Teacher meeting will be conducted tomorrow. Request all teachers to be present at the Assembly hall at 9am."
        }, {
          date: "10-11-2018",
          From: "Principal",
          description: "School will be remained closed from 13th to 15th Jan on occation of Pongal"
        }, {
          date: "18-05-2018",
          From: "Chairmen",
          description: "Parent teacher meeting on 20th Jan. Request all the parents to be present and meet their respective teachers"
        }, {
          date: "11-06-2018",
          From: "School Management",
          description: "Flag hoisting on the Occation of Republic day 26th Jan. Request all the parent and Children to be present."
        },
        {
          date: "15-11-2018",
          From: "Principal",
          description: "School will be remain closed today (18th Feb) due to party call on Bund."
        }];
    }
  }
}
