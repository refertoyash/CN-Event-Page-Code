import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FilterDetailsService } from 'src/app/services/filter-details.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  // Changing fetching details on clicking any category
  mainColor =  'gray'
  apiurl: string = '';
  temp: any;
  temp1: any;
  new_events: any;

  ///////////////////// CARD CALLER //////////////////////////
  private apiUrl = 'https://api.codingninjas.com/api/v3/events';
  curr_category = 'ALL_EVENTS';
  curr_subcategory = 'Upcoming';
  tags: Array<string> = [];
  offset = 0;
  eventsObj = [];
  ta: any;
  events = [];
  tag = '';
  //////////////////////////////////////////////////////////

  // /******************************************************* */
  btn1 = 'disabled';
  btn2 = 'enabled';
  totPages = 1;
  curPage = 1;
  //pageVal = "";
  // /******************************************************* */

  constructor(private event: FilterDetailsService, private http: HttpClient) {
    var api = event.makeAPI();
  }

  callApi() {
    var api = this.event.makeAPI();
    console.log(api);
    console.log("good");
    this.http.get(api).subscribe((data: any) => {
      this.eventsObj = data.data.events;
      this.events = JSON.parse(JSON.stringify(this.eventsObj));
      this.totPages = data.data.page_count;
      console.log(this.totPages);
      this.curPage = this.offset / 20 + 1;
    });
  }

  ngOnInit() {
    this.callApi();
    this.curr_category = this.event.event_detail.category;
    this.curr_subcategory = this.event.event_detail.subcategory;
    // this.event.getData();
    this.apiurl = this.event.makeAPI();
    this.event.fill();
    // console.log(this.apiurl);
  }

  onClickCategory(category: string) {
    this.event.event_detail.category = category;
    this.event.event_detail.subcategory = 'Upcoming';
    this.curr_category = this.event.event_detail.category;
    this.curr_subcategory = this.event.event_detail.subcategory;
    this.apiurl = this.event.makeAPI();
    this.callApi();
    // this.event.fill();

    // console.log('api ye hun');
    // console.log(this.apiurl);
    // this.new_events = this.event.events;
    // console.log('Ye curr data');
    // console.log(this.new_events);
    // console.log('Ye curr data');
  }

  // Changing fetching details on clicking any subcategory

  onClickSubCategory(subcategory: string) {
    this.event.event_detail.subcategory = subcategory;
    this.curr_subcategory = this.event.event_detail.subcategory;
    this.apiurl = this.event.makeAPI();
    this.callApi();
    // this.event.fill();

    // console.log(this.apiurl);
    // console.log(this.event.event_detail);
  }

  getImg(curr_url: string): string {
    if (this.curr_category == '')
      return '../../../assets/images/allEventsActive.svg';
    return curr_url;
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
    this.offset -= 20;
    this.callApi();
  }

  nextPage() {
    this.offset += 20;
    this.callApi();
    document.documentElement.scrollTop = 0;
  }

  functionPage() {
    var aa = (document.getElementById('pageVal') as HTMLInputElement).value;
    var a = parseInt(aa);
    if (a > this.totPages) return;
    else {
      this.offset = (a - 1) * 20;
      this.callApi();
      document.documentElement.scrollTop = 0;
    }
  }
}
