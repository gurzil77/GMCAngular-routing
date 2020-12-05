import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../cv/cv.model';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.css']
})
export class DetailPersonComponent implements OnInit {
  personne : Personne
  constructor(
    private activatedRoute : ActivatedRoute,
    private cvService : CvService,
    private router : Router
  ) {}
 
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)  => {
        // this.personne =this.cvService.getPersonById(params.id)
        this.cvService.getPersonByIdObservable(params.id).subscribe(
          (person) => this.personne = person,
          (error) => {          
            const LINK = ['hiringcv']
            this.router.navigate(LINK)}
        )
      }
    )
  }
  
  
  deletePerson() {
    if (this.cvService.deletePerson(this.personne)) {
      this.router.navigate(['hiringcv'])
    }
  }

}
