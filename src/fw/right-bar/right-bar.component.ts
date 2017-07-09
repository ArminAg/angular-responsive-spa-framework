import { Router, NavigationEnd } from '@angular/router';
import { IMenuItem, MenuService } from './../_services/menu.service';
import { UserApi } from 'fw/users/user-api';
import { FrameworkConfigService } from './../_services/framework-config.service';
import {
    Component, OnInit, ElementRef, Renderer, trigger,
    transition, style, animate, HostBinding, Input, HostListener
} from '@angular/core';

@Component({
    selector: 'fw-right-bar',
    templateUrl: './right-bar.component.html',
    styleUrls: ['./right-bar.component.css'],
    animations: [
        trigger('visibilityChanged', [
            transition(':enter', [ // :enter is alias to 'void => *'
                style({ opacity: 0 }),
                animate(250, style({ opacity: 1 }))
            ]),
            transition(':leave', [ // :leave is alias to '* => void'
                animate(100, style({ opacity: 0 }))
            ])
        ])
    ]
})
export class RightBarComponent implements OnInit {
    item1: IMenuItem = {
        text: 'ENG',
        icon: 'glyphicon-flag',
        route: null,
        submenu: [
            {
                text: 'GER',
                icon: 'glyphicon-flag',
                route: null,
                submenu: null
            },
            {
                text: 'FRA',
                icon: 'glyphicon-flag',
                route: null,
                submenu: null
            },
        ]
    };

    // @HostBinding('class.parent-is-popup')
    parentIsPopup = false;
    isActiveRoute = false;

    mouseInItem = false;
    mouseInItem1 = false;
    mouseInItem2 = false;
    mouseInPopup1 = false;
    mouseInPopup2 = false;
    mouseInPopup = false;
    popupLeft = 0;
    popupTop = 78;

    constructor(
        private frameworkConfigService: FrameworkConfigService,
        private menuService: MenuService,
        private userApi: UserApi,
        private router: Router,
        private el: ElementRef,
        private renderer: Renderer
    ) { }

    ngOnInit() {
    }

    onMenuItemMouseEnter(event): void {
        switch (event.target.id) {
            case 'language-menu': {
                this.mouseInItem1 = true;
                if (this.parentIsPopup) {
                    this.popupLeft = 173;
                    this.popupTop = -2;
                }
                break;
            }
            case 'user-menu': {
                this.mouseInItem2 = true;
                if (this.parentIsPopup) {
                    this.popupLeft = 173;
                    this.popupTop = -2;
                }
                break;
            }
        }
    }

    onMenuItemMouseLeave(event): void {
        console.log(event.target.id);
        switch (event.target.id) {
            case 'language-menu': {
                this.mouseInPopup1 = false;
                this.mouseInPopup2 = false;
                break;
            }
            case 'user-menu': {
                this.mouseInPopup1 = false;
                this.mouseInPopup2 = false;
                break;
            }
        }
    }

    onPopupMouseEnter(event): void {
        console.log(event.target.id);
        switch (event.target.id) {
            case 'language-popup': {
                this.mouseInPopup1 = true;
                break;
            }
            case 'user-popup': {
                this.mouseInPopup2 = true;
                break;
            }
        }
    }

    onPopupMouseLeave(event): void {
        if (!this.menuService.isVertical) {
            this.mouseInItem1 = false;
            this.mouseInPopup1 = false;
            this.mouseInItem2 = false;
            this.mouseInPopup2 = false;
        }
    }

    signOut() {
        this.userApi.signOut();
    }
}
