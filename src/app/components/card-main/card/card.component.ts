import { Component, Input } from '@angular/core';
import { FilterDetailsService } from 'src/app/services/filter-details.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})


export class CardComponent {
  @Input() regStartTime!: string;
  @Input() regEndTime!: string;
  @Input() all_data: any;

  cost!: any;
  tagList!: Array<string>;

  tags: Array<string> = [];
  otherTag = 0;
  constructor() {}

  ngOnInit(): void {

    console.log(this.all_data);
    console.log(this.regEndTime);
    
    this.cost = this.all_data.fees;
    if (this.cost == 0) {
      this.cost = 'Free';
    } else {
      this.cost = this.all_data.fees;
    }

    this.tagList = this.all_data.card_tags;
    for (let i = 0; i < this.tagList.length; i++) {
      if (i < 3) {
        this.tags.push(this.tagList[i]);
      } else {
        this.otherTag++;
      }
    }
  }
}
