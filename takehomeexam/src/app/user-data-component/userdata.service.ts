import { Injectable, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class UserdataService {
  id:string|null="";
  private user : Users[] = [];
   //Users attach id
  apiURL : string = "not active";
  constructor(private route: ActivatedRoute, private http:HttpClient) { 
    this.apiURL = "https://jsonplaceholder.typicode.com/users/";
   }
  //ret  user val or undefined if fail to find
  getUser(id:string|null): Observable<Users> {
    if(id != null){
      console.log("Getting user: " + this.apiURL) + id;
     return this.http.get<Users>(this.apiURL + id);
    }else  {
       return EMPTY;
    }
    
  }
  
}
