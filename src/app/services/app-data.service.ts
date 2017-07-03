import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { ICountry } from './../view-models/country';

import { Injectable } from '@angular/core';

@Injectable()
export class AppDataService {

    private countries: Array<ICountry> = [
        { id: 1, name: 'Australia', epiIndex: 87.67 },
        { id: 2, name: 'Singapore', epiIndex: 87.67 },
        { id: 3, name: 'Germany', epiIndex: 87.67 },
        { id: 4, name: 'Spain', epiIndex: 87.67 },
        { id: 5, name: 'Austria', epiIndex: 87.67 },
        { id: 6, name: 'Sweden', epiIndex: 87.67 },
        { id: 7, name: 'Norwa', epiIndex: 87.67 },
    ];

    constructor(private userService: UserService) { }

    createCountry(vm: ICountry): Observable<any> {
        // return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Unable to create country'));
        let id = 0;
        this.countries.forEach(c => {
            if (c.id >= id) {
                id = c.id + 1;
            }
        });
        vm.id = id;
        this.countries.push(vm);
        return Observable.of(vm);
    }

    deleteCountry(id: number): Observable<any> {
        // return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Delete error.'));
        return Observable.of({}).delay(2000)
            .do(e => this.countries.splice(this.countries.findIndex(c => c.id == id), 1));
    }

    getCountries(): Observable<any> {
        return Observable.of(this.countries);
    }

    getCountry(id: number): Observable<ICountry> {
        const country = this.countries.find(c => c.id == id);
        return Observable.of(country);
    }

    updateCountry(updatedCountry: ICountry): Observable<any> {
        const country = this.countries.find(c => c.id == updatedCountry.id);
        Object.assign(country, updatedCountry);
        return Observable.of(country).delay(2000);
    }
}
