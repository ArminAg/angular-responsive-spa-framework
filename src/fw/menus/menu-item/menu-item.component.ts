import { IMenuItem } from './../../services/menu.service';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item = <IMenuItem>null;

  constructor() { }

  ngOnInit() {
  }

}
