import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-banner',
  templateUrl: './card-banner.component.html',
  styleUrls: ['./card-banner.component.css']
})
export class CardBannerComponent {
  @Input() imgSrc!:string;
  @Input() regEndTime!:string;
  @Input() regStatus!: string;
  @Input() name!: string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.regEndTime);
  }
}
