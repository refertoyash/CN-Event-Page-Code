import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FilterDetailsService } from 'src/app/services/filter-details.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})


export class CardComponent{  
  constructor(private data: AppComponent){
  }
  
  ngOnInit(){
   
      // console.log("I'm detail"+ this.details+ this.apiurl);
    }
}
  
  
