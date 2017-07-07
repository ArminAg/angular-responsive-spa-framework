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
        route: 'authenticated/users-view',
        submenu: [
            {
                text: 'Select',
                icon: 'glyphicon-expand',
                route: 'authenticated/users-list/3',
                submenu: [
                    {
                        text: 'Admins',
                        icon: 'glyphicon-user',
                        route: 'authenticated/users-detail/USA',
                        submenu: null
                    },
                    {
                        text: 'Groups',
                        icon: 'glyphicon-user',
                        route: 'authenticated/users-detail/India',
                        submenu: null
                    },
                    {
                        text: 'Brands',
                        icon: 'glyphicon-user',
                        route: 'authenticated/users-detail/Switzerland',
                        submenu: null
                    }
                ]
            },
            {
                text: 'Top 3',
                icon: 'glyphicon-user',
                route: 'authenticated/users-list/3',
                submenu: null
            },
            {
                text: 'Top 5',
                icon: 'glyphicon-user',
                route: 'authenticated/users-list/5',
                submenu: null
            },
            {
                text: 'All Users',
                icon: 'glyphicon-user',
                route: 'authenticated/users-list/0',
                submenu: null
            },
            {
                text: 'Users List',
                icon: 'glyphicon-th-list',
                route: 'authenticated/users-view',
                submenu: null
            },
        ]
    },
    {
        text: 'Countries',
        icon: 'glyphicon-flag',
        route: null,
        submenu: [
            {
                text: 'Top 3',
                icon: 'glyphicon-flag',
                route: 'authenticated/country-list/3',
                submenu: null
            },
            {
                text: 'Top 10',
                icon: 'glyphicon-flag',
                route: 'authenticated/country-list/10',
                submenu: null
            },
            {
                text: 'All',
                icon: 'glyphicon-flag',
                route: 'authenticated/country-list/0',
                submenu: null
            }
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
