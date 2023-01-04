import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText:any;

  @Output() text_to_search : EventEmitter<any> = new EventEmitter

  ngOnInit(){
    this.text_to_search.emit(this.searchText);
  }
}
