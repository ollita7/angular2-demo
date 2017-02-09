import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { ProjectModel } from '../models/project.model'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProjectService {

    constructor(private http: Http){

    }

    public list(): Observable<Array<ProjectModel>>{
         return this.http.get("/mocks/projects.json")
                    .map((res:Response) => res.json())
                    .map((res:any) =>{
                        return res.projects;
                    })
                    .catch((error:any) =>
                        Observable.throw(error.json().error || 'Server error')
                    )
    }
}