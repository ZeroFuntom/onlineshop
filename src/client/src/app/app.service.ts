import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
    apiUrl: string = 'http://localhost:53882/api/People';

    constructor(private _http: Http) { }

    public getPeople(): Observable<IPerson[]> {
        return this._http.get(this.apiUrl).map((r) => {
            return r.json();
        });
    }
}
