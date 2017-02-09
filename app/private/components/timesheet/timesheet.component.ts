import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { TimesheetModel } from '../../../shared/models/timesheet.model'

@Component({
  templateUrl: './app/private/components/timesheet/timesheet.component.html',
  providers: []
})
export class TimesheetComponent implements OnInit{
    public times: Array<TimesheetModel>;

    constructor(){
      this.times = [];
    }

    ngOnInit(): void {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth();
      var days = new Date(year, month + 1, 0).getDate();
      for(var i=1; i<=days; i++){
         var item: TimesheetModel = new  TimesheetModel();
         item.date = new Date(year, month+1, i);
         item.time = 0;
         item.observaton = "";
         this.times.push(item);
      }
    }
}