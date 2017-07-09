import { ScreenService } from './../_services/screen.service';
import { MenuService } from './../_services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fw-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private menuService: MenuService,
    private screenService: ScreenService) { }

  ngOnInit() {
  }

}
