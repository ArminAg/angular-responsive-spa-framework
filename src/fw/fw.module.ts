import { TitleBarComponent } from './title-bar/title-bar.component';
import { ContentComponent } from './content/content.component';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class FwModule { }
