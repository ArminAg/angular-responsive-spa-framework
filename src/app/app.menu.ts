import { IMenuItem } from './../fw/services/menu.service';

export let initialMenuItems: Array<IMenuItem> = [
    {
        text: 'Dashboard',
        icon: 'glyphicon-dashboard',
        route: '/dashboard',
        submenu: null
    },
    {
        text: 'Countries',
        icon: 'glyphicon-flag',
        route: '/countries',
        submenu: null
    },
    {
        text: 'Settings',
        icon: 'glyphicon-wrench',
        route: '/settings',
        submenu: null
    }
]
