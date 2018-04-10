import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class Services {
    options;
    headers;
    private servicesURL: string = "http://18.220.163.142/";

    constructor(private _http: Http) {

        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        this.headers.append('Accept', 'application/json');
        this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
        this.headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
        this.options = new RequestOptions({ headers: this.headers });
    };

    /* getAccessToken(){
        return this.storage.get('isLoggedin');
    } */
    getRegisteredSchools() {
        return this._http.get(this.servicesURL + 'getSchools.php')
            .map((res: Response) => res.json())
            .catch((err: any) => Observable.throw(err.json().error));
    };

    fetchStudentProfileById(studentId) {
        //const accessToken = this.getAccessToken();
        this.headers.append('Authorization', 'Barer ' + 'Mg==');
        var options = new RequestOptions({ headers: this.headers });
        console.log(this.headers);
        return this._http.get(this.servicesURL + 'getStudentProfile.php?studentId=' + +studentId, options)
            .map((res: Response) => res.json())
            .catch((err: any) => Observable.throw(err.json().error));
    }

    getOTP(selectedSchoolId, mobileNumber) {
        const requestPayload = { 'school_id': +selectedSchoolId, 'username': +mobileNumber };
        var options = new RequestOptions({ headers: this.headers });

        return this._http.post(this.servicesURL + 'validateUser.php', JSON.stringify(requestPayload), this.options)
            .map((res: Response) => res.json())
            .catch((err: any) => Observable.throw(err.json().error));
    };

    login(selectedSchoolId, mobileNumber, otp) {
        const requestPayload = { 'school_id': +selectedSchoolId, 'username': +mobileNumber, otp: +otp };
        var options = new RequestOptions({ headers: this.headers });

        return this._http.post(this.servicesURL + 'login.php', JSON.stringify(requestPayload), this.options)
            .map((res: Response) => res.json())
            .catch((err: any) => Observable.throw(err.json().error));
    }
}