import { Routes } from '@angular/router';

import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '', component: DashboardComponent },
    { path: '**', component: DashboardComponent }
];
