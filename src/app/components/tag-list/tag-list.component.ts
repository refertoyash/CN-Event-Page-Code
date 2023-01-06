import { Component, Input } from '@angular/core';
import { FilterDetailsService } from 'src/app/services/filter-details.service';
import { GetTagApiDataService } from 'src/app/services/get-tag-api-data.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css'],
})
export class TagListComponent {
  @Input() tag!: string;
  @Input() index!: number;
  @Input() tag_status!: boolean[]; //List of selected tags
  @Input() alltags!: string[];
  
  temp_status: boolean | undefined;
  constructor(
    private event: FilterDetailsService,
    private tags: GetTagApiDataService
  ) {}

  apiurl: string = '';
  
  ItemClicked(index: number) {
    //Updating current status of tags 
  
    this.temp_status = this.tag_status[index];
    if (this.temp_status == true) this.tag_status[index] = false;
    else this.tag_status[index] = true;

    //Updating event_detail of service
    this.event.event_detail.taglist = ''; 

    for (let i = 0; i < this.tag_status.length; i++) {
      if (this.tag_status[i] == true)
        this.event.event_detail.taglist = this.event.event_detail.taglist + this.alltags[i] + ',';
    }

    this.event.event_detail.taglist = this.event.event_detail.taglist.substring(0,this.event.event_detail.taglist.length - 1);
  }

  ngOnInit() {}
}
