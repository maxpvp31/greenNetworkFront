import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http: HttpClient
  ) { }
countryToDetail : any

    getData(){
     return this.countryToDetail ;
    }

setData(country:any) {
this.countryToDetail = country ;
}
}