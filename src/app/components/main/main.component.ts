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
  // Changing fetching details on clicking any category
  searchText:any;
  apiurl: string = '';
  temp: any;
  temp1: any;
  new_events: any;
  alleventsname!: string[];
  public screenWidth: any;
  toDisplay = true;


  apiUrl = this.event.apiUrl;
  curr_category = this.event.event_detail.category;
  curr_subcategory = this.event.event_detail.subcategory;

  tags: Array<string> = [];
  offset = 0;
  eventsObj = [];
  ta: any;
  events: any;
  tag = '';

  btn1 = 'disabled';
  btn2 = 'enabled';
  totPages = 1;
  curPage = 1;


  constructor(private event: FilterDetailsService, private http: HttpClient) {
    var api = event.makeAPI();
  }


  callApi() {
    var api = this.event.makeAPI();
    console.log(api);
    this.http.get(api).subscribe((data: any) => {
      this.eventsObj = data.data.events;
      this.events = this.eventsObj;
      console.log(this.events); // Here current daata will be fetched
      this.alleventsname = this.events.name;
      // console.log(this.alleventsname);  // Here current daata will be fetched
      // console.log("fdhdjfhdjf dfgkd gd ");  // Here current daata will be fetched
      this.totPages = data.data.page_count;
      // console.log(this.totPages);
      this.curPage = this.offset / 20 + 1;
    });

    // console.log(this.events); Here old data will be fteched
  }

  ngOnInit() {
    this.callApi();
    this.curr_category = this.event.event_detail.category;
    this.curr_subcategory = this.event.event_detail.subcategory;
    // this.event.getData();
    this.apiurl = this.event.makeAPI();
    this.event.fill();
    // console.log(this.apiurl);
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 980) this.toDisplay = false;
    // console.log(this.toDisplay);
    // console.log(this.screenWidth);
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
    this.event.event_detail.offset -= 20;
    // document.documentElement.scrollTop = 0;
    window.scrollTo(0, 0)
    this.callApi();
  }

  nextPage() {
    this.offset += 20;
    this.event.event_detail.offset += 20;
    // document.documentElement.scrollTop = 0;
    window.scrollTo(0, 0)
    console.log("I'm Clicked for next")
    this.callApi();
  }

  functionPage() {
    var aa = (document.getElementById('pageVal') as HTMLInputElement).value;
    var a = parseInt(aa);
    if (a > this.totPages) return;
    else {
      this.offset = (a - 1) * 20;
      this.callApi();
    }
    document.documentElement.scrollTop = 0;
  }

  ToggleTags() {
    if (this.toDisplay == true) this.toDisplay = false;
    else this.toDisplay = true;
  }
  
}
