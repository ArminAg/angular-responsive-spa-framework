import { Router, NavigationEnd } from '@angular/router';
import { IMenuItem, MenuService } from './../_services/menu.service';
import { UserApi } from 'fw/users/user-api';
import { FrameworkConfigService } from './../_services/framework-config.service';
import { Component, OnInit, ElementRef, Renderer, trigger,
    transition, style, animate, HostBinding, Input, HostListener } from '@angular/core';

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
    item2: IMenuItem = {
        text: 'Armin',
        icon: 'glyphicon-user',
        route: null,
        submenu: [
            {
                text: 'Settings',
                icon: 'glyphicon-cog',
                route: 'authenticated/country-maint',
                submenu: null
            },
            {
                text: 'Sign Out',
                icon: 'glyphicon-lock',
                route: 'authenticated/settings',
                submenu: null
            }
        ]
    };

    @HostBinding('class.parent-is-popup')
    parentIsPopup = false;
    isActiveRoute = false;

    mouseInItem = false;
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
        this.checkActiveRoute(this.router.url);

        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this.checkActiveRoute(event.url);
                    // console.log(event.url + ' ' + this.item.route + ' ' + this.isActiveRoute);
                }
            });
    }



    signOut() {
        this.userApi.signOut();
    }

    checkActiveRoute(route: string) {
        this.isActiveRoute = (route == '/' + this.item1.route);
    }

    @HostListener('click', ['$event'])
    onClick(event): void {
        event.stopPropagation();
        if (this.item1.submenu) {
            if (this.menuService.isVertical) {
                this.mouseInPopup = !this.mouseInPopup;
            }
        } else if (this.item1.route) {
            // Force horizontal menus to close by sending a mouseleave event
            let newEvent = new MouseEvent('mouseleave', { bubbles: true });
            this.renderer.invokeElementMethod(this.el.nativeElement, 'dispatchEvent', [newEvent]);
            this.router.navigate(['/' + this.item1.route]);
        }
    }

    onPopupMouseEnter(event): void {
        if (!this.menuService.isVertical) {
            this.mouseInPopup = true;
        }
    }

    onPopupMouseLeave(event): void {
        if (!this.menuService.isVertical) {
            this.mouseInPopup = false;
        }
    }

    @HostListener('mouseleave', ['$event'])
    onMouseLeave(event): void {
        if (!this.menuService.isVertical) {
            this.mouseInItem = false;
        }
    }

    @HostListener('mouseenter')
    onMouseEnter(): void {
        if (!this.menuService.isVertical) {
            if (this.item1.submenu) {
                this.mouseInItem = true;
                if (this.parentIsPopup) {
                    this.popupLeft = 173;
                    this.popupTop = -2;
                }
            }
        }
    }

}
