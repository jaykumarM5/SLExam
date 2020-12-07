import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userID:String = 'Jay';
  password:String;
  name:String;
  isVerified:String;

  task = [];
  eventupdate = new Subject();
  constructor(private http: HttpClient) { }

  login(userID:String, password:String) {
    const credentials = { 
      user: userID,
      password: password,
    }
    this.userID = userID;
    
    this.http.post<any>("http://localhost:3000/login/", credentials)
      .subscribe(data => {
        this.isVerified = data;
      })
  }

  addUser(userID:String, password:String,name: String ) {
    const credentials = { 
      user: userID,
      password: password,
      name: name
    }
    this.userID = userID;
    
    this.http.post<any>("http://localhost:3000/adduser/", credentials)
      .subscribe(data => {
      })
  }

  submit(desc:String, assignedTo:String) {
    const taskItem = { 
      desc: desc,
      assignedTo : assignedTo,
      assignedBy : this.userID,
    }
    
    this.http.post<any>("http://localhost:3000/event/", taskItem)
      .subscribe(data => {
        this.task.push(data);
        this.eventupdate.next([...this.task])
        console.log(data);
      })
  }

  getTask() {
    this.http.get<any>("http://localhost:3000/event/").subscribe(data => {
      this.task = data;
      this.eventupdate.next([...this.task]);
    })
  }

  getEventUpdateListener(): any {
    return this.eventupdate.asObservable();
  }

}
