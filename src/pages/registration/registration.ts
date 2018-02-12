import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FindschoolPage } from '../findschool/findschool';


@IonicPage()
@Component({
    selector: 'page-registration',
    templateUrl: 'registration.html'
})

export class RegistrationPage {
    isSendOTPDisabled: boolean = true;
    otp: string;
    showOtpField: boolean = false;
    showValidateOTPButton: boolean = false;

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
}