import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './active/user-list/user-list.component';
import { MainContentComponent } from './home/main-content/main-content.component';
import {UserListDeletedComponent} from './deleted/user-list-deleted/user-list-deleted.component'


const routes: Routes = [
  {
    component:MainContentComponent,
    path:'home'
  },
  {
    component:UserListComponent,
    path:'active'
  },
  {
    component:UserListDeletedComponent,
    path:'delete'
  },
  {
    path:'manage',loadChildren:()=>import('./manage/manage.module').then(mod=>mod.ManageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
