import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponentComponent } from './user-list-component/user-list-component.component';
import { UserDataComponentComponent } from './user-data-component/user-data-component.component';
const routes: Routes = [
  {path: "", component:UserListComponentComponent},
  {path:"data/:id", 
    component: UserDataComponentComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }