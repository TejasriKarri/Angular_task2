import { Injectable } from '@angular/core';
import {users} from './users'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userList:Array<users>=([
    {
      id: "user1",
      firstName: "Tejasri",
      lastName: "Karri",
      age: 22,
      login: "teja@email.com",
      password: "te@34",
      isDeleted: false
    },
    {
      id: "user2",
      firstName: "devi",
      lastName: "Karri",
      age: 47,
      login: "devi@email.com",
      password: "de@34",
      isDeleted: false
    },
    {
      id: "user3",
      firstName: "srinivas",
      lastName: "Karri",
      age: 54,
      login: "sri@email.com",
      password: "se@34",
      isDeleted: false
    },
    {
      id: "user4",
      firstName: "durga",
      lastName: "Karri",
      age: 24,
      login: "dur@email.com",
      password: "du@34",
      isDeleted: false
    },
    {
      id: "user5",
      firstName: "suni",
      lastName: "madugula",
      age: 27,
      login: "suni@email.com",
      password: "sii@34",
      isDeleted: true
    },
    {
      id: "user6",
      firstName: "nuthu",
      lastName: "madugula",
      age: 34,
      login: "nuth@email.com",
      password: "nn@34",
      isDeleted: true
    },
    {
      id: "user7",
      firstName: "tanu",
      lastName: "kosuru",
      age: 23,
      login: "tanu@email.com",
      password: "tann@34",
      isDeleted: true
    },
    {
      id: "user8",
      firstName: "prathima",
      lastName: "kilaparthi",
      age: 45,
      login: "kila@email.com",
      password: "kll@34",
      isDeleted: true
    },


  ]
  )
  constructor() { }
}
