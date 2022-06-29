import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
   users:any;

  constructor(private userData:UserServiceService) {
    this.users=userData.userList
   // console.warn(userData.userList)
   }
  //  getData(){
  //    return this.userData.userList
  //  }

  ngOnInit(): void {
  }

}
