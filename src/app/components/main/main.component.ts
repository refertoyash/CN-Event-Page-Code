import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';
import { FilterDetailsService } from 'src/app/services/filter-details.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})


export class MainComponent {

  // Some important variable to store data 

  searchText: any;
  screenWidth: any;
  toDisplay = true;
  events: any;
  totPages = 1;
  curPage:any;
  
  tags: Array<string> = [];
  tag = '';
 


  constructor(private event: FilterDetailsService, private http: HttpClient) {}
  
  //Updating current status in these variables 
  curr_category = this.event.event_detail.category;
  curr_subcategory = this.event.event_detail.subcategory;
  offset = this.event.event_detail.offset;


  
  //Calling API whenever any event happens

  callApi() {
    var api = this.event.makeAPI();
    // console.log(api); getting data from this generated api
    this.http.get(api).subscribe((data: any) => {
        // console.log(data);
        // console.log(data.data.events);
        this.events = data.data.events;
        // console.log(this.events); // Here current daata will be fetched
        this.totPages = data.data.page_count;
      });
  }

  ngOnInit() {
    this.callApi();
    this.curPage = 1;
    this.curr_category = this.event.event_detail.category;
    this.curr_subcategory = this.event.event_detail.subcategory;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 980) this.toDisplay = false;
    // console.log(this.toDisplay);
    // console.log(this.screenWidth);
  }


  ///////////////////////////////////////////////////////////////////////////////

  // Changing fetching details on clicking any category

  onClickCategory(category: string) {
    this.event.event_detail.category = category;
    this.event.event_detail.subcategory = 'Upcoming';
    this.curr_category = this.event.event_detail.category;
    this.curr_subcategory = this.event.event_detail.subcategory;
    this.callApi();
    // console.log(this.apiurl);
    // this.new_events = this.event.events;
    // console.log(this.new_events)
  }

  // Changing fetching details on clicking any subcategory

  onClickSubCategory(subcategory: string) {
    this.event.event_detail.subcategory = subcategory;
    this.curr_subcategory = this.event.event_detail.subcategory;
    this.callApi();
    // console.log(this.apiurl);
    // console.log(this.event.event_detail);
  }

  changeTag(tag: string) {
    const ind = this.tags.indexOf(tag);
    if (ind > -1) {
      this.tags.splice(ind, 1);
    } else {
      this.tags.push(tag);
    }
    this.offset = 0;
    this.callApi();
  }

  prevPage() {
    this.event.event_detail.offset -= 20;
    this.curPage = this.curPage-1;
    window.scrollTo(0, 0);
    this.callApi();
  }

  nextPage() {
    this.event.event_detail.offset += 20;
    this.curPage = this.curPage+1;
    window.scrollTo(0, 0);
    this.callApi();
  }

  ToggleTags() {
    if (this.toDisplay == true) this.toDisplay = false;
    else this.toDisplay = true;
  }

}
