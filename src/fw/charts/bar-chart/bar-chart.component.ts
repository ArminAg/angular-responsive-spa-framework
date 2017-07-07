import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fw-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
