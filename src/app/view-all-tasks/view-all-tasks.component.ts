import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-all-tasks',
  templateUrl: './view-all-tasks.component.html',
  styleUrls: ['./view-all-tasks.component.css']
})
export class ViewAllTasksComponent implements OnInit {
  taskList = [{
    desc : "HelloWorld",
    asssignedTo : "JAy",
    assignedBy : "Naman",
    status : "incomplete"
  }];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTask();
    this.dataService.getEventUpdateListener().subscribe(data => {
      this.taskList = data;
    })
  }

}
