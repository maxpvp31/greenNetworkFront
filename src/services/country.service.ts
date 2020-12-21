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


    getUsers(data){
      return this.http.post<any>(`${environment.apiUrl}/cartes/addcarte`,data);
    }


}
