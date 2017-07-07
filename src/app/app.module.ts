import { UsersService } from './_services/users.service';
import { AppDataService } from './_services/app-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FwModule } from './../fw/fw.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';

import { appRoutes } from './app.routing';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

import { AuthGuard } from './_services/auth-guard.service';
import { UserService } from './_services/user.service';
import { UserApi } from 'fw/users/user-api';
import { UsersViewComponent } from './users-view/users-view.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersPanelComponent } from './panels/users-panel/users-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    AuthenticatedUserComponent,
    UsersViewComponent,
    UsersListComponent,
    UsersDetailComponent,
    UsersPanelComponent
  ],
  imports: [
    BrowserModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    { provide: UserApi, useExisting: UserService },
    AuthGuard,
    AppDataService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
