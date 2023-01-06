import { Component, EventEmitter, Output } from '@angular/core';
import { GetTagApiDataService } from 'src/app/services/get-tag-api-data.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent {
  tempdata: any; //temporary variable to store API response
  alltags = []; //List of all tags
  curr_tags = []; //List of curr active tags
  tag_status: boolean[] = []; //List of selected tags
  
  flag = false;
  temp_tags: any; //helping me in toglleing Show MOre and Show Less
  inclTags: Array<string> = []; //helping me in generating API 

  @Output() tagChange = new EventEmitter<string>();  //To make an Api call on tag change in main component (child->parent)

  constructor(private selectedtags: GetTagApiDataService) {}

  ShowMore() {
    this.curr_tags = this.alltags;
    this.flag = true;
  }

  ShowLess() {
    this.curr_tags = this.temp_tags;
    this.flag = false;
  }

  ngOnInit() {
    this.selectedtags.getData().subscribe((response) => {

      this.tempdata = response;
      this.alltags = this.tempdata.data.tags;
      // console.log(this.alltags);
      for (let i = 0; i < Math.min(this.alltags.length, 10); i++) {
        this.curr_tags.push(this.alltags[i]);
        this.tag_status.push(false);
      }
      this.temp_tags = this.curr_tags;

    });
  }

  tagClicked(tag: string) {
    this.inclTags.push(tag);
    this.tagChange.emit(tag);
  }
}
