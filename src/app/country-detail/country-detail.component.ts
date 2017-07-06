import { FieldDefinition } from './../../fw/dynamic-forms/field-definition';
import { AppDataService } from './../_services/app-data.service';
import { ICountry } from './../_view-models/country';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  country: ICountry;
  countryDefinition: Array<FieldDefinition> = [
    {
      key: 'id',
      type: 'number',
      isId: true,
      label: 'Id',
      required: true
    },
    {
      key: 'name',
      type: 'string',
      isId: false,
      label: 'Country Name',
      required: true
    },
    {
      key: 'epiIndex',
      type: 'number',
      isId: false,
      label: 'EPI Index',
      required: true
    },
  ];
  errorMessage: string;
  operation: string;
  countryId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: AppDataService
  ) {
  }

  createCountry(country: ICountry) {
    country.id = 0;
    this.errorMessage = null;
    this.dataService.createCountry(country).subscribe(
      c => this.router.navigate(['/authenticated/country-maint']),
      err => this.errorMessage = 'Error creating country'
    );
  }

  ngOnInit() {
    this.operation = this.route.snapshot.params['operation'];
    if (this.operation === 'create') {
      this.country = { id: 0, name: '', epiIndex: null};
    } else {
      this.dataService.getCountry(this.route.snapshot.params['id'])
        .subscribe((country: ICountry) => this.country = country);
    }
  }

  updateCountry(country: ICountry) {
    this.errorMessage = null;
    this.dataService.updateCountry(country).subscribe(
      c => this.router.navigate(['/authenticated/country-maint']),
      err => this.errorMessage = 'Error updating country'
    );
  }
}
