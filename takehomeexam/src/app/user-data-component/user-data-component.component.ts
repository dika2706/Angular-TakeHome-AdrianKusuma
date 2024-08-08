import { Component } from '@angular/core';
import { Users } from '../models/users';
import { UserdataService } from './userdata.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-data-component',
  templateUrl: './user-data-component.component.html',
  styleUrls: ['./user-data-component.component.css']
})
export class UserDataComponentComponent {
  user : Users = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: 0,
        lng: 0
      }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  };
  constructor(private dataService : UserdataService, private route: ActivatedRoute){}
  id : string|null = '';
  ngOnInit():void {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id)
    this.dataService.getUser(this.id).subscribe(user => this.user = user);
  }
  copyMessage() {
    navigator.clipboard.writeText(JSON.stringify(this.user));
    alert("Copied data");
  }
}
