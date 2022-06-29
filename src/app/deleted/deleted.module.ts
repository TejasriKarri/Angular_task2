import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListDeletedComponent } from './user-list-deleted/user-list-deleted.component';



@NgModule({
  declarations: [
    UserListDeletedComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserListDeletedComponent
  ]
})
export class DeletedModule { }
