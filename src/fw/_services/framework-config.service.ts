import { Injectable } from '@angular/core';

@Injectable()
export class FrameworkConfigService {

  showLanguageSelector = true;
  showUserControls = true;
  showFooter = true;
  socialIcons = new Array<IconFiles>();

  configure(settings: FrameworkConfigSettings): void {
    Object.assign(this, settings);
  }
}

export interface IconFiles {
  imageFile: string,
  alt: string,
  link: string
}

export interface FrameworkConfigSettings {
  showLanguageSelector?: boolean,
  showUserControls?: boolean,
  showFooter?: boolean,
  socialIcons?: Array<IconFiles>
}
