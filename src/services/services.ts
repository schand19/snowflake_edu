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
        this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.options = new RequestOptions({ headers: this.headers });
    };

    getRegisteredSchools() {
        return this._http.get(this.servicesURL + 'getSchools.php')
            .map((res: Response) => res.json())
            .catch((err: any) => Observable.throw(err.json().error));
    }

    getOTP(selectedSchoolId, mobileNumber) {
        var body = { school_id: +selectedSchoolId, username: +mobileNumber };
        console.log(body);
        console.log(JSON.stringify(body));
        
        let req = Object.keys(body).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(body[k])
        }).join('&');
        console.log('school_id=selectedSchoolId&username=mobileNumber');

        return this._http.post(this.servicesURL + 'validateUser.php?', 'school_id='+selectedSchoolId+'&username='+mobileNumber, this.options)
            .map((res: Response) => res.json())
            .catch((err: any) => Observable.throw(err.json().error));
    };
}