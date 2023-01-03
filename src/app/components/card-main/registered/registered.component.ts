import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent {
  @Input() imgSrc!: string;
  @Input() name!: string;
  @Input() otherUsers!: string;
  @Input() regStatus!: string;
}
