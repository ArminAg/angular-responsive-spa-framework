import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fw-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
