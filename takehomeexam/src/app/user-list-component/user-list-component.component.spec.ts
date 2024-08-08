import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { UserListComponentComponent } from './user-list-component.component';
import { UserService } from './user.service';
import { of } from 'rxjs';

describe('UserListComponentComponent', () => {
  let component: UserListComponentComponent;
  let fixture: ComponentFixture<UserListComponentComponent>;
  let userListService : UserService;
  let userSpy : jasmine.Spy;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      
       declarations: [UserListComponentComponent],
       providers: [UserService]
     }).compileComponents();
 
     fixture = TestBed.createComponent(UserListComponentComponent);
     component = fixture.componentInstance;
     
     userListService = TestBed.inject(UserService);
     userSpy = spyOn(userListService, 'getUsers').and.returnValue(of(  
         [
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
         }, 
         {
          id:2,
            name:"Ervin Howell",
            username:"Antonette",
            email:"Shanna@melissa.tv",
            address:{street:"Victor Plains",
              suite:"Suite 879",
              city:"Wisokyburgh",
              zipcode:"90566-7771",
              geo:{lat:-43.9509,lng:-34.4618}},
              phone:"010-692-6593 x09125",website:"anastasia.net",
              company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",  bs:"synergize scalable supply-chains"}
         }
         //... others
         ]
     ));
   });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
