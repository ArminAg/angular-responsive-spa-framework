import { Observable } from 'rxjs/Observable';

export abstract class UserApi {
    signIn: (username: string, password: string, rememberMe: boolean) => Observable<any>;
    register: (username: string, email: string, password: string, passwordConfirm: string) => Observable<any>;
    signOut: () => Observable<any>;
    // changePassword:
}
