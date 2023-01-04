import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() value!:string;
  @Input() link!:string;
  finallink !:string;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.link);
    this.finallink  = "https://www.codingninjas.com/events/" + this.link;
    // console.log(this.finallink);
    // console.log("Mai register link");
  }
}
