import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FindschoolPage } from '../findschool/findschool';
import { RegistrationPage } from '../registration/registration';
import { HomePage } from '../home/home';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  selectedSchoolId: string;
  selectedSchoolDB: string;
  selectedSchool: string;
  /* userName:string;
  password:string; */

  isSendOTPDisabled: boolean = true;
  otp: string;
  showOtpField: boolean = false;
  showLoginButton: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedSchool = navParams.get('selectedSchool');
    this.selectedSchoolId = navParams.get('selectedSchoolId');
    this.selectedSchoolDB = navParams.get('selectedSchoolDB');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage', this.selectedSchool, this.selectedSchoolId, this.selectedSchoolDB);
  }

  getMeToFindSchool() {
    this.navCtrl.push(FindschoolPage);
  }

  getMeToRegistration() {
    this.navCtrl.push(RegistrationPage);
  }

  validatePhone(phoneNumber) {
    this.isSendOTPDisabled = true;
    if (phoneNumber.toString().length == 10) {
      this.isSendOTPDisabled = false;
    }
  }

  sendOTP() {
    this.showOtpField = true;
  }

  readOTP(otp) {
    this.otp = '';
    this.showLoginButton = false;

    if (otp) {
      this.otp = otp;
      this.showLoginButton = true;
    }
  }

  login() {
    if (/* this.userName && this.userName === 'Admin' && this.password && this.password === "P@ssword" */ this.otp) {
      this.navCtrl.push(HomePage);
    }
  }
}
