import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { UsersListComponent } from './users-list/users-list.component';


@NgModule({
  declarations: [
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    ManageRoutingModule
  ]
})
export class ManageModule { }
