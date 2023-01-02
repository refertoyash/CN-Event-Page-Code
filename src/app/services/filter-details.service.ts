import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterDetailsService {

 
  // this will keep tracking all details necessary for api formation of events 

  event_detail = {
    category: 'All Events',
    subcategory: 'Upcoming',
    taglist: '',
    offset: 1,
  };


  constructor() { }
}
