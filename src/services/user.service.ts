import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }


   getWine(data){
      return this.http.get<any>('https://www.scorebat.com/video-api/v1/', data);
     }


}
