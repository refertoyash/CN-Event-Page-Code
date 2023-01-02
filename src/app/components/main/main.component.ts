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

  onClickCategory(category: string){
    this.event.event_detail.category = category;
    this.event.event_detail.subcategory = "Upcoming";
    this.curr_category =   this.event.event_detail.category 
    this.curr_subcategory =   this.event.event_detail.subcategory
    console.log(this.event.event_detail);
  }

  // Changing fetching details on clicking any subcategory 

  onClickSubCategory(subcategory: string){
    this.event.event_detail.subcategory = subcategory;
    this.curr_subcategory =   this.event.event_detail.subcategory
    console.log(this.event.event_detail);
  }
  
  ngOnInit(){
    this.curr_category = this.event.event_detail.category;
    this.curr_subcategory = this.event.event_detail.subcategory;
  }
  

  getImg(curr_url: string):string{
    if(this.curr_category=='All Events') return ("../../../assets/images/allEventsActive.svg");
    return curr_url;
  }

    
  changeCategory() {}

  changeSubCategory() {}
}
