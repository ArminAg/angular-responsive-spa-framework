import { IUser } from './../_view-models/user';
import { UsersService } from './../_services/users.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  allUsers: Array<IUser>;
  count = 0;
  users: Array<IUser>;

  constructor(
    private dataService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.dataService.getAll().subscribe(
      users => {
        this.allUsers = users;
        this.count = this.route.snapshot.params['count'];
        this.updateList();
      }
    );

    this.route.params.subscribe(params => {
      this.count = params['count'];
      this.updateList();
    });
  }

  updateList() {
    this.users = this.count > 0 ? this.allUsers.slice(0, this.count) : this.allUsers;
  }

}
