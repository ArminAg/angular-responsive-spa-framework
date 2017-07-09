import { MenuService } from './../_services/menu.service';
import { ScreenService } from './../_services/screen.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private screenService: ScreenService,
    private menuService: MenuService
  ) { }

  ngOnInit() {
  }

}
