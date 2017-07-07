import { UserManagementService } from './user-management.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private userService: UserManagementService, private router: Router) { }

    canActivate(): boolean {
        console.log('AuthGuard#canActivate called ' + this.userService.isAuthenticated);

        if (!this.userService.isAuthenticated) {
            console.log('Not Auth');
            this.router.navigate(['/signin']);
        }
        return this.userService.isAuthenticated;
    }

    canActivateChild(): boolean {
        return this.canActivate();
    }
}
