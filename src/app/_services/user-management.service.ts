import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { UserApi } from 'fw/users/user-api';

@Injectable()
export class UserManagementService implements UserApi {
    isAuthenticated = true;

    constructor(private router: Router) { }

    signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
        console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
        this.isAuthenticated = true;
        return Observable.of({}).delay(2000);
        // return Observable.of({}).delay(2000).flatMap(x => Observable.throw('Invalid User Name and/or Password'));
    }

    register(username: string, email: string, password: string, passwordConfirm: string): Observable<any> {
        console.log('UserService.signIn: ' + username + ' ' + email + ' ' + password + ' ' + passwordConfirm);
        this.isAuthenticated = true;
        return Observable.of({}).delay(2000);
        // return Observable.of({}).delay(2000).flatMap(x => Observable.throw('User Name and/or Password already taken'));
    }

    signOut(): Observable<any> {
        this.isAuthenticated = false;
        this.router.navigate(['/signin']);
        return Observable.of({});
    }
}
