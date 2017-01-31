import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

    constructor(private http: Http){
    }

    public list():Observable<Array<any>>{
         return this.http.get("/mocks/users.json")
                    .map((res:Response) => res.json())
                    .map((res:any) =>{
                        return res.users;
                    })
                    .catch((error:any) =>
                        Observable.throw(error.json().error || 'Server error')
                    )
    }

    public get(id: number): Observable<any>{
        return this.http.get("/mocks/users.json")
            .map((res:Response) => res.json())
            .map((res:any) =>{
                var user = res.users.filter((user:any) => user.id == id);
                return user[0];
            })
            .catch((error:any) =>
                Observable.throw(error.json().error || 'Server error')
            )
    }
}