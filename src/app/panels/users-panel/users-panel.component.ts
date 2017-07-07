import { IUser } from './../../_view-models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-panel',
  templateUrl: './users-panel.component.html',
  styleUrls: ['./users-panel.component.css']
})
export class UsersPanelComponent implements OnInit {

  @Input() user: IUser;
  @Input() index = 1;

  constructor() { }

  ngOnInit() {
  }

}
