import { Component, Input, OnInit } from '@angular/core';

import { ICountry } from '../../view-models/Country';

@Component({
  selector: 'app-country-panel',
  templateUrl: './country-panel.component.html',
  styleUrls: ['./country-panel.component.css']
})
export class CountryPanelComponent implements OnInit {

  @Input() country: ICountry;
  @Input() index = 1;

  constructor() { }

  ngOnInit() {
  }

}