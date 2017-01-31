import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProjectService {
    public projects: Array<any> = [];

    constructor(private http: Http){

    }

    public list(): Observable<Array<any>>{
         return this.http.get("/mocks/projects.json")
                    .map((res:Response) => res.json())
                    .map((res:any) =>{
                        this.projects = res.projects;
                        return this.projects;
                    })
                    .catch((error:any) =>
                        Observable.throw(error.json().error || 'Server error')
                    )
    }

    public get(id: number): any{
        return this.projects.filter(user => user.id == id);
    }
}