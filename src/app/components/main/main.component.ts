import { Component } from '@angular/core';
import { FilterDetailsService } from 'src/app/services/filter-details.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  event_category: string | undefined;

  constructor(private event:FilterDetailsService){}
  
  // Changing fetching details on clicking any category 
  curr_category = ""
  curr_subcategory = ""
  apiurl :string = ""
  onClickCategory(category: string){
    this.event.event_detail.category = category;
    this.event.event_detail.subcategory = "Upcoming";
    this.curr_category =   this.event.event_detail.category 
    this.curr_subcategory =   this.event.event_detail.subcategory
    this.apiurl = this.event.makeAPI();
    console.log(this.apiurl);
    console.log(this.event.event_detail);
  }

  // Changing fetching details on clicking any subcategory 

  onClickSubCategory(subcategory: string){
    this.event.event_detail.subcategory = subcategory;
    this.curr_subcategory =   this.event.event_detail.subcategory
    this.apiurl = this.event.makeAPI();
    console.log(this.apiurl);
    console.log(this.event.event_detail);
  }
  
  ngOnInit(){
    this.curr_category = this.event.event_detail.category;
    this.curr_subcategory = this.event.event_detail.subcategory;
    this.apiurl = this.event.makeAPI();
    console.log(this.apiurl);
  }
  

  getImg(curr_url: string):string{
    if(this.curr_category=='') return ("../../../assets/images/allEventsActive.svg");
    return curr_url;
  }

    
  changeCategory() {}

  changeSubCategory() {}
}
