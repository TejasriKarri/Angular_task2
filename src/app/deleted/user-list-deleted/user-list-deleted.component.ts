import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-user-list-deleted',
  templateUrl: './user-list-deleted.component.html',
  styleUrls: ['./user-list-deleted.component.css']
})
export class UserListDeletedComponent implements OnInit {

  users:any;

  constructor(private userData:UserServiceService) {
    this.users=userData.userList
   // console.warn(userData.userList)
   }

  ngOnInit(): void {
  }

}
