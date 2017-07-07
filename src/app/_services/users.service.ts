import { FieldDefinition } from './../../fw/dynamic-forms/field-definition';
import { Observable } from 'rxjs/Observable';
import { IUser } from './../_view-models/user';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

    private users: Array<IUser> = [
        { id: 1, name: 'John Wick', email: 'john.wick@email.com', role: 'Administrator', status: 'Active' },
        { id: 2, name: 'Alex Doe', email: 'alex.doe@email.com', role: 'Administrator', status: 'Active' },
        { id: 3, name: 'Irina Welo', email: 'irina.welo@email.com', role: 'Support', status: 'Pending' },
        { id: 4, name: 'Jean Michel', email: 'jean.michel@email.com', role: 'Read only', status: 'Disabled' },
        { id: 5, name: 'John Wick', email: 'john.wick@email.com', role: 'Administrator', status: 'Active' },
        { id: 6, name: 'Alex Doe', email: 'alex.doe@email.com', role: 'Administrator', status: 'Active' },
        { id: 7, name: 'Irina Welo', email: 'irina.welo@email.com', role: 'Support', status: 'Pending' },
        { id: 8, name: 'Jean Michel', email: 'jean.michel@email.com', role: 'Read only', status: 'Disabled' }
    ];

    userDefinition: Array<FieldDefinition> = [
    {
      key: 'id',
      type: 'number',
      isId: true,
      label: 'Id',
      required: true
    },
    {
      key: 'name',
      type: 'string',
      isId: false,
      label: 'Full Name',
      required: true
    },
    {
      key: 'email',
      type: 'string',
      isId: false,
      label: 'Email',
      required: true
    },
    {
      key: 'role',
      type: 'string',
      isId: false,
      label: 'Role',
      required: true
    },
    {
      key: 'status',
      type: 'string',
      isId: false,
      label: 'Status',
      required: true
    }
  ];

    constructor() { }

    create(vm: IUser): Observable<any> {
        // return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Unable to create user'));
        let id = 0;
        this.users.forEach(c => {
            if (c.id >= id) {
                id = c.id + 1;
            }
        });
        vm.id = id;
        this.users.push(vm);
        return Observable.of(vm);
    }

    delete(id: number): Observable<any> {
        // return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Delete error.'));
        return Observable.of({}).delay(2000)
            .do(e => this.users.splice(this.users.findIndex(c => c.id == id), 1));
    }

    getAll(): Observable<any> {
        return Observable.of(this.users);
    }

    getById(id: number): Observable<IUser> {
        const user = this.users.find(c => c.id == id);
        return Observable.of(user);
    }

    update(updatedObject: IUser): Observable<any> {
        const user = this.users.find(c => c.id == updatedObject.id);
        Object.assign(user, updatedObject);
        return Observable.of(user).delay(2000);
    }
}
