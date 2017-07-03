import { Router } from '@angular/router';
import { AppDataService } from './../services/app-data.service';
import { ICountry } from './../view-models/country';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-maint',
  templateUrl: './country-maint.component.html',
  styleUrls: ['./country-maint.component.css']
})
export class CountryMaintComponent implements OnInit {
  countries: Array<ICountry>
  deleteError: string;
  deleteId: number;
  isDeleting = false;

  constructor(
    private dataService: AppDataService,
    private router: Router
  ) {
    dataService.getCountries().subscribe((data) => this.countries = data);
  }

  ngOnInit() {
  }

  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }

}
