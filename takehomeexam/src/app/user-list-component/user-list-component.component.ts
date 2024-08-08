import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { UserService } from './user.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css'],
  
})
export class UserListComponentComponent {
  users: Users[] = [];
  constructor(private userService : UserService) { };
  ngOnInit():void {
   this.userService.getUsers().subscribe(users => this.users = users);
  }
}
