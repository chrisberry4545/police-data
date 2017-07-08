import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import {
    CrimeIncidentInterface,
} from './../../../models/index';

// tslint:disable-next-line
const url = 'https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2013-01';

@Injectable()
export default class PoliceDataService {

    constructor(
        private _http: Http,
    ) {}

    public getData(): Observable<CrimeIncidentInterface[]> {
        return this._http.get(url).map((resp) => {
            return resp.json();
        });
    }
}
