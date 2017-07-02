import { TopBarComponent } from './top-bar/top-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameworkConfigService } from './services/framework-config.service';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { ContentComponent } from './content/content.component';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent
  ],
  providers: [
    FrameworkConfigService
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class FwModule { }
