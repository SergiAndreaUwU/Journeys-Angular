import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.css']
})
  export class AppComponent implements OnInit {
    title = 'AngularCRUD';
    users = [];
    apiUrl = 'https://reqres.in/api';
  
    constructor(private http: HttpClient) {}
  
    ngOnInit() {
      this.getUserById(2).subscribe(
        val  =>{
          alert(val.data.first_name)
        }
      )
    }
  
    getUsers(): Observable<any> {
      return this.http.get(this.apiUrl+"/users?page=2");
    }
  
    getUserById(id:number): Observable<any> {
      return this.http.get(this.apiUrl+"/users/"+id);
    }
  
    clickedButton() {
     this.users = [];
      this.getUsers().subscribe(val => {
        console.log(val.data);
        val.data.forEach(element => {
          this.users.push(element.first_name)
        });
      });
  
    }
  
  
  }
