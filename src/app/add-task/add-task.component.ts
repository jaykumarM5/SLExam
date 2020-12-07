import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  taskDescription:String ;
  assignedTo:String;
  assignedBy:String;
  taskStatus:String = 'incomplete';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.dataService.submit(this.taskDescription, this.assignedTo);
    this.taskDescription = '';
    this.assignedBy = '';
    this.assignedTo = '';
  }

}
