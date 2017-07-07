import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data = {
        labels: ['BMW', 'Audi', 'Porsche'],
        datasets: [
            {
                data: [5, 3, 1],
                backgroundColor: [
                    '#ff6384',
                    '#36a2eb',
                    '#ffce56'
                ]
            }
        ]
    };

  constructor() { }

  ngOnInit() {
  }

}
