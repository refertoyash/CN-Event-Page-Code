import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetTagApiDataService {

  constructor(private http: HttpClient) { }
  
  getData(){
    let url ='https://api.codingninjas.com/api/v3/event_tags'
    return this.http.get(url);
  }
}
