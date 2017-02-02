import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProjectService } from '../../../../shared/services/project.service';
import { ProjectModel } from '../../../../shared/models/project.model'

@Component({
  templateUrl: './app/private/components/project/list/project.list.component.html',
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit{
    public projects: Array<ProjectModel>;

    public constructor(private projectService: ProjectService){
    }

    ngOnInit(): void {
        this.projectService.list().subscribe((response)=>{
            this.projects =  response;
        });
    }
}