import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService{

    constructor(private http: Http){}

    login(email:string, password: string): Observable<any>{
        return this.http.get("/mocks/users.json")
                        .map((res:Response) => res.json())
                        .map((res:any) =>{
                            return res.users.filter((user:any) => user.email == email && user.password == password);
                        })
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    }
}
