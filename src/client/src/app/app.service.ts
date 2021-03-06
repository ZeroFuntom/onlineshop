import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
    apiUrl: string = 'http://localhost:53882/api';

    constructor(private _http: Http) { }

    public getPeople(): Observable<IPerson[]> {
        return this._http.get(this.apiUrl + '/People').map((r) => {
            return r.json();
        });
    }

    public getPerson(id: number): Observable<IPerson> {
        return this._http.get(this.apiUrl + '/People/' + id).map((r) => {
            return r.json();
        });
    }

    public getHobbies(): Observable<IHobby[]> {
        return this._http.get(this.apiUrl + '/Hobbies').map((r) => {
            return r.json();
        });
    }
}
