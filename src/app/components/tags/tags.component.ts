import { Component } from '@angular/core';
import { GetTagApiDataService } from 'src/app/services/get-tag-api-data.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})


export class TagsComponent {

  tempdata: any;  //temporary variable to store API response 
  alltags= [];   //List of all tags
  curr_tags = []; //List of top 10 tags
  tag_status: boolean[] = [];  //List of selected tags
  flag = false;

  constructor(private selectedtags: GetTagApiDataService) {
    this.selectedtags.getData().subscribe((response) => {
      this.tempdata = response;
      this.alltags = this.tempdata.data.tags;
      console.log(this.alltags);

      for (let i = 0; i < Math.min(this.alltags.length, 10); i++) {
        this.curr_tags.push(this.alltags[i]);
        this.tag_status.push(false);
      }
    });
  }


  ShowMore() {
    this.curr_tags = this.alltags;
    this.flag = true;
  }


  


}
