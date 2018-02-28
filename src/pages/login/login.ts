import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FindschoolPage } from '../findschool/findschool';
import { RegistrationPage } from '../registration/registration';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/Storage';

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
  hasSchoolImage: boolean = false;
  /* userName:string;
  password:string; */

  isSendOTPDisabled: boolean = true;
  otp: string;
  showOtpField: boolean = false;
  showLoginButton: boolean = false;
  userType: string;
  isRemember: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.selectedSchool = navParams.get('selectedSchool');
    this.selectedSchoolId = navParams.get('selectedSchoolId');
    this.selectedSchoolDB = navParams.get('selectedSchoolDB');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  getMeToFindSchool() {
    this.navCtrl.push(FindschoolPage);
  }

  getMeToRegistration() {
    this.navCtrl.push(RegistrationPage, { selectedSchool: this.selectedSchool, selectedSchoolId: this.selectedSchoolId, selectedSchoolDB: this.selectedSchoolDB });
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

  login(otp) {
    console.log("login user otp:", otp);
    if (otp == "111") {
      //replace "parent" with the user type value from otp response
      this.userType = "Parent";
      console.log("login user type:", this.userType);
    } else if (otp == "222") {
      this.userType = "Teacher";
      console.log("login user type:", this.userType);
    }
    this.storage.set("userType", this.userType);
    if (/* this.userName && this.userName === 'Admin' && this.password && this.password === "P@ssword" */ this.otp && this.userType != null) {
      this.navCtrl.push(HomePage, { userType: this.userType });
    }

  }
}
