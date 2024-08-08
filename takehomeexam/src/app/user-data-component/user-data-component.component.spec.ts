import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Users } from '../models/users';
import { UserDataComponentComponent } from './user-data-component.component';
import { UserdataService } from './userdata.service';
import { Observable, of } from 'rxjs';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
describe('UserDataComponentComponent', () => {
  let component: UserDataComponentComponent;
  let fixture: ComponentFixture<UserDataComponentComponent>;
  let userdataService : UserdataService;
  let userDataSpy : jasmine.Spy;


  beforeEach(async() => {
   await TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [UserDataComponentComponent],
      providers: [UserdataService]
    }).compileComponents();

    fixture = TestBed.createComponent(UserDataComponentComponent);
    component = fixture.componentInstance;
    
    userdataService = TestBed.inject(UserdataService);
    userDataSpy = spyOn(userdataService, 'getUser').and.returnValue(of(  
      {
        id:1,
        name:"Leanne Graham",
        username:"Bret",
        email:"Sincere@april.biz",
        address:{street:"Kulas Light",
        suite:"Apt. 556",
        city:"Gwenborough",
        zipcode:"92998-3874",
        geo:{lat:-37.3159,lng:81.1496}},
        phone:"1-770-736-8031 x56442",
        website:"hildegard.org",
        company:{name:"Romaguera-Crona",
          catchPhrase:"Multi-layered client-server neural-net",
          bs:"harness real-time e-markets"}
     }
    ));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
