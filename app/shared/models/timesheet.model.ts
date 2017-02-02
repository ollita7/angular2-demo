import { ProjectModel } from './project.model'

export class TimesheetModel{
    public id: string;
    public project: ProjectModel;
    public date: Date;
    public time: number;
    public observaton: string;
}