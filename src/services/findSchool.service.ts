import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FindSchoolService {
    private findSchoolUrl: string = "http://18.220.163.142/api/user/schools-list";

    constructor(private _http: Http) { };

    getRegisteredSchools() {
        console.log('calling findschool service');
        return this._http.get(this.findSchoolUrl)
            .map((res: Response) => res.json())
            .catch((err: any) => Observable.throw(err.json().error));
    };
}