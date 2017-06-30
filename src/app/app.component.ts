import { FrameworkConfigService, FrameworkConfigSettings } from './../fw/services/framework-config.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private frameworkConfigService: FrameworkConfigService) {
    const config: FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/social-facebook.png', alt: 'Facebook', link: 'http://www.facebook.com' },
        { imageFile: 'assets/social-twitter.png', alt: 'Twitter', link: 'http://www.twitter.com' },
        { imageFile: 'assets/social-googleplus.png', alt: 'GooglePlus', link: 'http://www.googleplus.com' }
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };

    frameworkConfigService.configure(config);
  }
}
