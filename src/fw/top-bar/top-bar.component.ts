import { MenuService } from './../_services/menu.service';
import { ScreenService } from './../_services/screen.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(
    private screenService: ScreenService,
    private menuService: MenuService
  ) { }

  ngOnInit() {
  }

}
