import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { api_users } from "../../api_calls/api_users"

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.css']
})
export class JourneysComponent implements OnDestroy {
  title: String = 'AngularCRUD';
  users: Array<Object> = [];
  subscription:Subscription;

  constructor(private apiUsers: api_users) { }

  ngOnDestroy() {
    if(this.subscription){ 
      this.subscription.unsubscribe()
      console.log("unsubscribed")
    }
  }

  getPosts() {
    this.users = [];
    this.subscription=this.apiUsers.getUsers().subscribe(
      val => {
        console.log(val)
        console.log(val.data);
        val.data.forEach(element => {
          this.users.push(element.first_name)
        });
      },
      err => console.log(err)
    )



  }
}
