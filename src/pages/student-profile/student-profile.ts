import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StudentProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-profile',
  templateUrl: 'student-profile.html',
})
export class StudentProfilePage {
  currentProfile: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentProfile = {
      "parent_id": "1",
      "father_name": "Father",
      "father_mobile_num": "9904512345",
      "father_qualification": "Business",
      "father_annual_income": "500000",
      "father_occupation": "fdsdfs",
      "father_email": "fghfg@gmail.com",
      "father_aadhaar_num": "234234234234",
      "mother_name": "Mother",
      "mother_occupation": "Business",
      "mother_mobile_num": "9904512345",
      "mother_qualification": "Degree",
      "mother_annual_income": "200000",
      "mother_email": "test@gmail.com",
      "mother_aadhaar_num": "345534556436",
      "address": "jhgasdf hgajhasdf",
      "student_id": "1",
      "class_id": "1",
      "section_id": "1",
      "iSchoolId": "1",
      "admission_num": "123123",
      "registration_num": "3244525",
      "registration_date": "14/02/2018",
      "student_first_name": "Test",
      "student_last_name": "Student",
      "DOB": "06/02/2018",
      "aadhaar_num": "3525235",
      "nationality": "Indian",
      "sub_cast": "BC",
      "religion": "HINDHU",
      "blood_group": "B+",
      "gender": "M",
      "phone_number": "99012312345",
      "student_pic": "",
      "student_roll_num": "2342344",
      "student_current_year": "2017-2018",
      "student_status": "Active",
      "student_class_year_id": "1",
      "year": "2017-2018",
      "date_time": "2018-02-21 15:51:15",
      "class_name": "10",
      "status": "Active"
    };
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentProfilePage');
  }

}
