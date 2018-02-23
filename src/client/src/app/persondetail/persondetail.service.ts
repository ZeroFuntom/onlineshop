import { HttpClient } from '@angular/common/http';

import { Injectable, Output, EventEmitter, ErrorHandler } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/take';

@Injectable()
export class PersondetailService {

    constructor() { }

}
