import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import { Personne } from '../cv.model';
import { CvService } from "../../services/cv.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output() selectedPersonEmitter = new EventEmitter<Personne>();
    persons = []
    constructor(
      private cvService : CvService
    ) {}
    /* personSelected(person) {
      this.selectedPersonEmitter.emit(person);
      } */ 
    ngOnInit() {
      this.cvService.getPersonsListObersvables().subscribe(
        (persons) => {
          this.persons = persons
        },
        () => this.persons = []
      )
    }
}
