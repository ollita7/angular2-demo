import { Component } from '@angular/core';
import { CountryService } from '../country.service';
import { OnInit } from '@angular/core';

@Component({
    templateUrl: './app/components/country/list/country.list.component.html',
    providers: [CountryService]
})
export class CountryListComponent implements OnInit{
    public countries: Array<any>;

    public constructor(private countryService: CountryService){
        this.countries = [];
    }

    ngOnInit(): void {
       this.countryService.list().subscribe((countries)=> {
            this.countries = countries;
            console.log(countries);
        });
    }
}