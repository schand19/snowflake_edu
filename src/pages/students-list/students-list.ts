import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Services } from '../../services/services';
import { Spinner } from '../../utilities/spinner';
import { StudentProfilePage } from '../student-profile/student-profile';

/**
 * Generated class for the StudentsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-students-list',
  templateUrl: 'students-list.html',
  providers: [Services, Spinner]
})
export class StudentsListPage {
  students: any;
  isDisabled: boolean = true;
  attendanceClass = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, private _services: Services,
    public spinner: Spinner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentsListPage');
  }

  onSelect(){
    if(this.attendanceClass){
      this.isDisabled = false;
    }
  }

  fetchStudents() {
    this.students = [
      { studentId: 1, studentName: 'Sarath', attendanceStatus: 'p' },
      { studentId: 2, studentName: 'Pradeep', attendanceStatus: 'p' },
      { studentId: 3, studentName: 'Vinod', attendanceStatus: 'p' }
    ];
  }

  fetchStudentProfileById(student) {
    this.navCtrl.push(StudentProfilePage, {student:student} );
    /* let spinner = this.spinner.start({ loaderText: '' });
    this._services.fetchStudentProfileById(studentId).subscribe(
      data => {
        console.log(data);
        spinner.dismiss();
      },
      error => { },
      () => { }
    ); */
  }
}
