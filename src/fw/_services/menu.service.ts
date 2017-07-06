import { Injectable } from '@angular/core';

export interface IMenuItem {
    text: string,
    icon: string,
    route: string,
    submenu: Array<IMenuItem>
}

@Injectable()
export class MenuService {
    items: Array<IMenuItem>;
    isVertical = false;
    showingLeftSideMenu = false;

    constructor() { }

    toggleLeftSideMenu(): void {
        this.isVertical = true;
        this.showingLeftSideMenu = !this.showingLeftSideMenu;
    }

    toggleMenuOrientation() {
        this.isVertical = !this.isVertical;
    }
}
