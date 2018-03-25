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
  students: {rollNo: string, studentName: string; attendanceStatus: string}[];
  attendanceCass;
  period;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');
  }

  fetchStudents(){
    this.students = [
      {rollNo: '1', studentName:'Sarath', attendanceStatus:'p'},
      {rollNo: '2', studentName:'Pradeep', attendanceStatus:'p'},
      {rollNo: '3', studentName:'Vinod', attendanceStatus:'p'}
    ];
  }

  onChange(event,student){
    student.attendanceStatus = event.target.value;
  }
  submitAttendance(){
    console.log(this.students);
  }

}
