import { RightBarComponent } from './right-bar/right-bar.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { FooterComponent } from './footer/footer.component';
import { PanelComponent } from './panels/panel/panel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartModule } from 'angular2-chartjs';

import { TopBarComponent } from './top-bar/top-bar.component';
import { ContentComponent } from './content/content.component';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { PopupMenuComponent } from './menus/popup-menu/popup-menu.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';
import { DynamicFieldComponent } from './dynamic-forms/dynamic-field/dynamic-field.component';
import { DynamicFormComponent } from './dynamic-forms/dynamic-form/dynamic-form.component';

import { FrameworkConfigService } from './_services/framework-config.service';
import { ScreenService } from './_services/screen.service';
import { MenuService } from './_services/menu.service';

import { ScreenBelowLargeDirective } from './_directives/screen-below-large.directive';
import { ScreenLargeDirective } from './_directives/screen-large.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    RightBarComponent,
    TopBarComponent,
    FooterComponent,
    ScreenLargeDirective,
    ScreenBelowLargeDirective,
    MenuComponent,
    MenuItemComponent,
    PopupMenuComponent,
    SignInComponent,
    RegisterUserComponent,
    DynamicFormComponent,
    DynamicFieldComponent,
    PanelComponent,
    PieChartComponent,
    DoughnutChartComponent,
    BarChartComponent
  ],
  providers: [
    FrameworkConfigService,
    ScreenService,
    MenuService
  ],
  exports: [
    FrameworkBodyComponent,
    DynamicFormComponent,
    PanelComponent,
    ScreenLargeDirective,
    ScreenBelowLargeDirective,
    PieChartComponent,
    DoughnutChartComponent,
    BarChartComponent
  ]
})
export class FwModule { }
