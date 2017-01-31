import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  templateUrl: './app/private/components/project/list/project.list.component.html',
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit{
    public projects: Array<any>;

    public constructor(private projectService: ProjectService){
        this.projects = [];
    }

    ngOnInit(): void {
        this.projectService.list().subscribe((response)=>{
            this.projects =  response;
        });
    }
}