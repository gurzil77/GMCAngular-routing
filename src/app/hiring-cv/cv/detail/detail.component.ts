import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmbaucheService } from '../../services/embauche.service';
import { Personne } from '../cv.model';
import { CvService } from '../../services/cv.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  // @Input() person = new Personne
  person

  constructor(
    private embaucheService : EmbaucheService,
    private router : Router,
    private cvService : CvService
  ) {}
  ngOnInit() {
    this.cvService.selectedPersonSubject.subscribe(
      (person) => {
        this.person = person;
      }
    )
  }
   embaucher() {
    this.embaucheService.embaucher(this.person)
   }
   redirectToDetails() {
    const id = this.person.id
    this.router.navigate(['hiringcv',id])
  }

}
