import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Services } from '../../services/services';
import { FindschoolPage } from '../findschool/findschool';
import { RegistrationPage } from '../registration/registration';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/Storage';
import { Spinner } from '../../utilities/spinner';

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
  providers: [Services, Spinner]
})
export class LoginPage {
  selectedSchoolId: string;
  selectedSchoolDB: string;
  selectedSchool: string;
  hasSchoolImage: boolean = false;
  phoneNumber: number;
  /* userName:string;
  password:string; */

  isSendOTPDisabled: boolean = true;
  otp: string;
  showOtpField: boolean = false;
  showLoginButton: boolean = false;
  userRole: string;
  isRemember: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
    public spinner: Spinner, private _services: Services) {
    this.selectedSchool = navParams.get('selectedSchool');
    this.selectedSchoolId = navParams.get('selectedSchoolId');
    //this.selectedSchoolDB = navParams.get('selectedSchoolDB');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  getMeToFindSchool() {
    this.navCtrl.push(FindschoolPage);
  }

  getMeToRegistration() {
    this.navCtrl.push(RegistrationPage, { selectedSchool: this.selectedSchool, selectedSchoolId: this.selectedSchoolId });
  }

  validatePhone(phoneNumber) {
    this.isSendOTPDisabled = true;
    if (phoneNumber.toString().length == 10) {
      this.phoneNumber = phoneNumber;

      this.isSendOTPDisabled = false;
    }
  }

  sendOTP() {
    let spinner = this.spinner.start({ loaderText: '' });
    this._services.getOTP(this.selectedSchoolId, this.phoneNumber).subscribe(
      otp => {
        console.log(otp);
      },
      err => {
        spinner.dismiss();
      },
      () => {
        spinner.dismiss();
      });
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

    let spinner = this.spinner.start({ loaderText: 'Fetching Schools' });

    this._services.login(this.selectedSchoolId, this.phoneNumber, otp).subscribe(rsp => {
      if (rsp.success) {
        console.log(rsp);
        const data = rsp.data;
        spinner.dismiss();
        this.storage.set('userName', data.vUserName);
        this.storage.set('userId', data.iLoginId);
        this.storage.set('school_id', data.iSchoolId);
        this.storage.set('userRole', data.vLoginType);
        this.storage.set('isLoggedin', data.auth_token);
        this.storage.set('profiles', data.children);
        this.navCtrl.push(HomePage);
      }
    }, error => {
      spinner.dismiss();
    }, () => {
    });

    /* if (otp == "111") {
      //replace "parent" with the user type value from otp response
      this.userRole = "Parent";
      console.log("login user type:", this.userRole);
    } else if (otp == "222") {
      this.userRole = "Teacher";
      console.log("login user type:", this.userRole);
    }
    this.storage.set("userRole", this.userRole);
    if (/* this.userName && this.userName === 'Admin' && this.password && this.password === "P@ssword" this.otp && this.userRole != null) {
      this.navCtrl.push(HomePage, { userRole: this.userRole });
    } */

  }
}

