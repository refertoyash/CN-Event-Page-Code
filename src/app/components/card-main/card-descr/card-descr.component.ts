import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-descr',
  templateUrl: './card-descr.component.html',
  styleUrls: ['./card-descr.component.css']
})
export class CardDescrComponent {
  @Input() description!:string;
}
