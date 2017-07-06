import { FrameworkConfigService } from './../_services/framework-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fw-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private frameworkConfigService: FrameworkConfigService) { }

  ngOnInit() {
  }

}
