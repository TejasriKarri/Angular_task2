import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ActiveModule} from './active/active.module';
import {DeletedModule} from './deleted/deleted.module';
import {HomeModule} from './home/home.module';
import {ManageModule} from './manage/manage.module';
import { UserListComponent } from './active/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActiveModule,
    DeletedModule,
    HomeModule,
    ManageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
