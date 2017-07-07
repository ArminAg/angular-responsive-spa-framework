import { Router } from '@angular/router';
import { UsersService } from './../_services/users.service';
import { IUser } from './../_view-models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {
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
