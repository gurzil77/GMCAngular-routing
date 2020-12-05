import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Personne } from '../cv/cv.model';
import { CvService } from '../services/cv.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private cvService : CvService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  /*addPerson(person : Personne) {
    this.cvService.addPerson(person);
    const LINK = ['hiringcv'];
    this.router.navigate(LINK)
  } */ 
  addPerson(person : Personne) {
    this.cvService.addPerson(person).subscribe(
      (resolve) => {
        console.log(resolve)
        const LINK = ['hiringcv'];
        this.router.navigate(LINK)},

      (error) => console.log(error)
    )
  }

}
