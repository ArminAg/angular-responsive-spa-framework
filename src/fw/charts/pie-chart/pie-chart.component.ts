import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fw-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
