import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userID:String;
  password:String;
  name:String;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.dataService.addUser(this.userID, this.password, this.name);
    this.userID = '';
    this.password = '';
    this.name = '';
  }
}
