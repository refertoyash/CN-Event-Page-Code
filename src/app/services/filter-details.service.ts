import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterDetailsService {
  // this will keep tracking all details necessary for api formation of events
  constructor(private http: HttpClient){}

  event_detail = {
    category: 'ALL_EVENTS',
    subcategory: 'Upcoming',
    taglist: '',
    offset: 0,
  };

  apiUrl = 'https://api.codingninjas.com/api/v3/events';

  makeAPI(){
    var api =
      this.apiUrl +
      '?event_category=' +
      this.event_detail.category +
      '&event_sub_category=' +
      this.event_detail.subcategory +
      '&tag_list=';

      for(let i=0;i<this.event_detail.taglist.length;i++){
        for(let j = 0; j<this.event_detail.taglist[i].length; j++){
          if(this.event_detail.taglist[i][j]==' ') api+='%20'
          else api+=this.event_detail.taglist[i][j];
        }
      }

    api += '&offset=' + this.event_detail.offset;
    return api;
  }

  CallAPI(url:string){
    return this.http.get(url);
  }
}
