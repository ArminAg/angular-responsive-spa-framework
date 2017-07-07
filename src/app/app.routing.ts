import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { Routes } from '@angular/router';

import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './../fw/users/sign-in/sign-in.component';
import { RegisterUserComponent } from './../fw/users/register-user/register-user.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

import { AuthGuard } from './_services/auth-guard.service';

export const appRoutes: Routes = [
    { path: 'signin', component: SignInComponent },
    { path: 'register', component: RegisterUserComponent },
    {
        path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuard],
        children: [
            {
                path: '', canActivateChild: [AuthGuard],
                children: [
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: 'dashboard', component: DashboardComponent },
                    { path: 'users-list', component: UsersListComponent },
                    { path: 'users-view/:count', component: UsersViewComponent },
                    { path: 'users-detail/:id/:operation', component: UsersDetailComponent },
                    { path: 'settings', component: SettingsComponent },
                ]
            }
        ]
    },
    { path: '', component: SignInComponent },
    { path: '**', component: SignInComponent }
];
