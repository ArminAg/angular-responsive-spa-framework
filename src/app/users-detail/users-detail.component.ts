import { FieldDefinition } from './../../fw/dynamic-forms/field-definition';
import { IUser } from './../_view-models/user';
import { UsersService } from './../_services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  user: IUser;
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
  errorMessage: string;
  operation: string;
  userId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: UsersService
  ) { }

  create(user: IUser) {
    user.id = 0;
    this.errorMessage = null;
    this.dataService.create(user).subscribe(
      c => this.router.navigate(['/authenticated/users-view']),
      err => this.errorMessage = 'Error creating user'
    );
  }

  ngOnInit() {
    this.operation = this.route.snapshot.params['operation'];
    if (this.operation === 'create') {
      this.user = { id: 0, name: '', email: '', role: '', status: ''};
    } else {
      this.dataService.getById(this.route.snapshot.params['id'])
        .subscribe((user: IUser) => this.user = user);
    }
  }

  update(user: IUser) {
    this.errorMessage = null;
    this.dataService.update(user).subscribe(
      c => this.router.navigate(['/authenticated/users-view']),
      err => this.errorMessage = 'Error updating user'
    );
  }

}
