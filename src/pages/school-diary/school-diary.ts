import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SchoolDiaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-school-diary',
  templateUrl: 'school-diary.html',
})
export class SchoolDiaryPage {
  userType:string;
  schooldiaryObject=[];
  parentDiaryView:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userType = navParams.get('userType');
  }


  ionViewDidLoad() {
    
    console.log('ionViewDidLoad SchoolDiaryPage');

    if(this.userType == "Parent"){
      this.parentDiaryView= true;
      this.schooldiaryObject=[{
        date: "10-11-2018",
        description: "Complete the rhymes homework by friday",
        subject: "English",
        Teacher: "Anuradha",
      },{
        date: "18-05-2018",
        description: "Complete the algorithems homework by friday",
        subject: "Maths",
        Teacher: "Jeevan",
      },{
        date: "11-06-2018",
        description: "Complete the Maps homework by friday",
        subject: "Social",
        Teacher: "Annapurna",
      },
      {
        date: "15-11-2018",
        description: "Complete the experiment homework by friday",
        subject: "General science",
        Teacher: "Shanthi",
      }];
  }
  }

}
