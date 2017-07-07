import { IMenuItem } from './../fw/_services/menu.service';

export let initialMenuItems: Array<IMenuItem> = [
    {
        text: 'Dashboard',
        icon: 'glyphicon-dashboard',
        route: 'authenticated/dashboard',
        submenu: null
    },
    {
        text: 'Users',
        icon: 'glyphicon-user',
        route: null,
        submenu: [
            {
                text: 'Select',
                icon: 'glyphicon-expand',
                route: null,
                submenu: [
                    {
                        text: 'Top 3',
                        icon: 'glyphicon-user',
                        route: 'authenticated/users-view/3',
                        submenu: null
                    },
                    {
                        text: 'Top 5',
                        icon: 'glyphicon-user',
                        route: 'authenticated/users-view/5',
                        submenu: null
                    },
                    {
                        text: 'All Users',
                        icon: 'glyphicon-user',
                        route: 'authenticated/users-view/0',
                        submenu: null
                    }
                ]
            },
            {
                text: 'Users List',
                icon: 'glyphicon-th-list',
                route: 'authenticated/users-list',
                submenu: null
            },
        ]
    },
    {
        text: 'Maintenance',
        icon: 'glyphicon-wrench',
        route: null,
        submenu: [
            {
                text: 'Settings',
                icon: 'glyphicon-cog',
                route: 'authenticated/settings',
                submenu: null
            }
        ]
    }
]
