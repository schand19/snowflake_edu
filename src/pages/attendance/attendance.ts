import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';

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
  students: any[];
  attendanceClass;
  period;
  isDisabled: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public tc: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');
  }

  checkRequired(){
    if(this.attendanceClass && this.period){
      this.isDisabled = false;
    }
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
    let toast = this.tc.create({
      message: 'Attendance successfully submitted',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      this.navCtrl.push(HomePage);
    });
  
    toast.present();
  }

}
