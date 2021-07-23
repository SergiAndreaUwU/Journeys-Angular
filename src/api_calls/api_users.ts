import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUserPost } from "../Models/IUser" //will use later when connected to my own mongoDB

@Injectable({
    providedIn:"root"
})

export class api_users{
    apiUrl = 'https://reqres.in/api';

    constructor(private http: HttpClient){}

    getUsers(): Observable<any> {
        return this.http.get(`${this.apiUrl}/users?page=2`);

      }

    getUserById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${id}`);

    }  
}
