import { initialMenuItems } from './app.menu';
import { MenuService } from './../fw/_services/menu.service';
import { FrameworkConfigService, FrameworkConfigSettings } from './../fw/_services/framework-config.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private frameworkConfigService: FrameworkConfigService,
    private menuService: MenuService
  ) {
    const config: FrameworkConfigSettings = {
      showLanguageSelector: true,
      showUserControls: true,
      showFooter: true
    };

    frameworkConfigService.configure(config);

    menuService.items = initialMenuItems;
  }
}
