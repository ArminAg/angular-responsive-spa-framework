import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FwModule } from './../fw/fw.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';

import { appRoutes } from './app.routing';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { CountryListComponent } from './country-list/country-list.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { UserApi } from 'fw/users/user-api';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    CountryDetailComponent,
    CountryMaintComponent,
    CountryListComponent,
    AuthenticatedUserComponent
  ],
  imports: [
    BrowserModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    { provide: UserApi, useExisting: UserService },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
