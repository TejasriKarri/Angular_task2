import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users:any;

  constructor(private userData:UserServiceService) {
    this.users=userData.userList
   // console.warn(userData.userList)
   }
  
   selectedUser?:any
   onSelect(user:any):void{
     this.selectedUser=user;
   }
   
  ngOnInit(): void {
  }

}
