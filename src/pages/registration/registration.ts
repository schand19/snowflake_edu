import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FindschoolPage } from '../findschool/findschool';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
    selector: 'page-registration',
    templateUrl: 'registration.html'
})

export class RegistrationPage {
    selectedSchool: string;
    selectedSchoolId: string;
    selectedSchoolDB: string;
    isSendOTPDisabled: boolean = true;
    otp: string;
    showOtpField: boolean = false;
    showValidateOTPButton: boolean = false;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        console.log(navParams)
        this.selectedSchool = navParams.get('selectedSchool');
        this.selectedSchoolId = navParams.get('selectedSchoolId');
        this.selectedSchoolDB = navParams.get('selectedSchoolDB');
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
        this.showValidateOTPButton = false;

        if (otp) {
            this.otp = otp;
            this.showValidateOTPButton = true;
        }
    }

    validateOTP() {
        if (this.otp) {

        }
    }

    getMeToFindSchool() {
        this.navCtrl.push(FindschoolPage);
    }
    
    getMeToLogin() {
        this.navCtrl.push(LoginPage, { selectedSchool: this.selectedSchool, selectedSchoolId: this.selectedSchoolId, selectedSchoolDB: this.selectedSchoolDB });
    }
}