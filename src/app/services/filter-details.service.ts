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


  apiurl: string = '';
  temp: any;
  temp1: any;
  events: any;
   
  show(){
    console.log('bhr');
    this.events = this.temp1;
    return this.events;
  }
  
  fill(){
    return this.http.get(this.makeAPI()).subscribe((response) => {
      this.temp = response;
      this.temp1 = this.temp.data.events;
      console.log('data ye laya');
      console.log(this.temp1);
      this.show();
    });
  }
}
