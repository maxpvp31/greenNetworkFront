import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedServices {

  constructor(
    private http: HttpClient
  ) { }

   
    getFeed(data : any){
      return this.http.post<any>(`${environment.apiUrl}/histo/get`,data);
    }

    
}