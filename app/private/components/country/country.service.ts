import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CountryService {

    constructor (private http: Http) {}

    public list(): Observable<Array<any>>{
        return this.http.get("https://restcountries.eu/rest/v1/all")
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    }
}
