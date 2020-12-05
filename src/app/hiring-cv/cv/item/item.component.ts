import { Component,Input,EventEmitter,Output } from '@angular/core';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() person;
  // @Output() buttonWasClicked = new EventEmitter();
  constructor(
    private cvService : CvService
  ) {}
  wasClicked() {
    // this.buttonWasClicked.emit(event);
    this.cvService.clickedPerson(this.person)
  }
}
