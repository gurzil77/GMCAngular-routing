import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(
    private authentication : AuthenticationService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  login(myForm :NgForm) {
    this.authentication.login(myForm.value).subscribe(
      (data) => { 
        localStorage.setItem('token', data.id);
        this.router.navigate(['hiringcv'])
      },
      (error) => {console.log(error)}
    )
  } 
}
