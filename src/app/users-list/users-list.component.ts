import { IUser } from './../_view-models/user';
import { UsersService } from './../_services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: Array<IUser>
  deleteError: string;
  deleteId: number;
  isDeleting = false;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
    usersService.getAll().subscribe((data) => this.users = data);
  }

  ngOnInit() {
  }

  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }

  create() {
    this.router.navigate(['/authenticated/users-detail', 0, 'create']);
  }

  delete(id: number) {
    this.isDeleting = true;
    this.usersService.delete(id).subscribe(
      c => this.cancelDelete(),
      err => { this.deleteError = err; this.isDeleting = false; }
    );
  }

  deleteQuestion(id: number) {
    this.deleteError = null;
    this.deleteId = id;
  }

  edit(id: number) {
    this.router.navigate(['/authenticated/users-detail', id, 'edit']);
  }

  showDetail(id: number) {
    this.router.navigate(['/authenticated/users-detail', id, 'details']);
  }
}
