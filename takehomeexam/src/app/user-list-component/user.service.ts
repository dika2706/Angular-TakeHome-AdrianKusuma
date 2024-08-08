import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //observable syncc for subscribe
@Injectable({ //dependency injection
  providedIn: 'root'
})
export class UserService {
  private users : Users[] = [];
  private apiURL = "https://jsonplaceholder.typicode.com"; //GET USERS
  private userList = [];
  constructor(private http: HttpClient) {  }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiURL + "/users");
  }

  
}
