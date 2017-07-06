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
      socialIcons: [
        { imageFile: 'assets/social-facebook.png', alt: 'Facebook', link: 'http://www.facebook.com' },
        { imageFile: 'assets/social-twitter.png', alt: 'Twitter', link: 'http://www.twitter.com' },
        { imageFile: 'assets/social-googleplus.png', alt: 'GooglePlus', link: 'http://www.googleplus.com' }
      ],
      showLanguageSelector: true,
      showUserControls: false,
      showFooter: true
    };

    frameworkConfigService.configure(config);

    menuService.items = initialMenuItems;
  }
}
