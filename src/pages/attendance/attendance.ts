import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage {
  userType:string;
  studentAttObject=[];
  parentAttendanceView:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userType = navParams.get('userType');
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');
    this.onLoadAttendanceView();
    
  }

  onLoadAttendanceView(){
    if(this.userType == "Parent"){
      this.parentAttendanceView= true;
      console.log("inside onLoadAttendanceView ", this.userType)
      this.studentAttObject=[{
        "student_pic": "",
        "student_roll_num": "1",
        "student_current_year": "2017-2018",
        "student_status": "Active",
        "att_date": "22/08/2017",
        "attendance": "P",
        "att_session": "morning",
        "teacher_id": "82",
        "late": "0",
        "status": "Active"
      },
      {
        "student_pic": "",
        "student_roll_num": "1",
        "student_current_year": "2017-2018",
        "student_status": "Active",
        "att_date": "22/08/2017",
        "attendance": "P",
        "att_session": "afternoon",
        "teacher_id": "82",
        "late": "0",
        "status": "Active"
      },
      {
        "student_pic": "",
        "student_roll_num": "1",
        "student_current_year": "2017-2018",
        "student_status": "Active",
        "att_date": "23/08/2017",
        "attendance": "P",
        "att_session": "morning",
        "teacher_id": "82",
        "late": "0",
        "status": "Active"
      },
      {
        "student_pic": "",
        "student_roll_num": "1",
        "student_current_year": "2017-2018",
        "student_status": "Active",
        "att_date": "23/08/2017",
        "attendance": "P",
        "att_session": "afternoon",
        "teacher_id": "82",
        "late": "0",
        "status": "Active"
      },
      {
        "student_pic": "",
        "student_roll_num": "1",
        "student_current_year": "2017-2018",
        "student_status": "Active",
        "att_date": "24/08/2017",
        "attendance": "P",
        "att_session": "morning",
        "teacher_id": "82",
        "late": "0",
        "status": "Active"
      },
      {
        "student_pic": "",
        "student_roll_num": "1",
        "student_current_year": "2017-2018",
        "student_status": "Active",
        "att_date": "24/08/2017",
        "attendance": "P",
        "att_session": "afternoon",
        "teacher_id": "82",
        "late": "0",
        "status": "Active"
      },
      {
        "student_pic": "",
        "student_roll_num": "1",
        "student_current_year": "2017-2018",
        "student_status": "Active",
        "att_date": "26/08/2017",
        "attendance": "P",
        "att_session": "morning",
        "teacher_id": "82",
        "late": "0",
        "status": "Active"
      },
      {
        "student_pic": "",
        "student_roll_num": "1",
        "student_current_year": "2017-2018",
        "student_status": "Active",
        "att_date": "26/08/2017",
        "attendance": "P",
        "att_session": "afternoon",
        "teacher_id": "82",
        "late": "0",
        "status": "Active"
      },
      {
        "student_pic": "",
        "student_roll_num": "1",
        "student_current_year": "2017-2018",
        "student_status": "Active",
        "att_date": "28/08/2017",
        "attendance": "P",
        "att_session": "morning",
        "teacher_id": "82",
        "late": "0",
        "status": "Active"
      },
      {
        "student_pic": "",
        "student_roll_num": "1",
        "student_current_year": "2017-2018",
        "student_status": "Active",
        "att_date": "28/08/2017",
        "attendance": "P",
        "att_session": "afternoon",
        "teacher_id": "82",
        "late": "0",
        "status": "Active"
      },
      {
        "student_pic": "",
        "student_roll_num": "1",
        "student_current_year": "2017-2018",
        "student_status": "Active",
        "att_date": "29/08/2017",
        "attendance": "P",
        "att_session": "morning",
        "teacher_id": "82",
        "late": "0",
        "status": "Active"
      },
      {
        "student_pic": "",
        "student_roll_num": "1",
        "student_current_year": "2017-2018",
        "student_status": "Active",
        "att_date": "30/08/2017",
        "attendance": "P",
        "att_session": "morning",
        "teacher_id": "82",
        "late": "0",
        "status": "Active"
      }];
  }
  }

}
