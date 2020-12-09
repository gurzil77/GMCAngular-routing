import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-second-header',
  templateUrl: './header.second.component.html',
  styleUrls: ['./header.second.component.css']
})
export class HeaderSecondComponent implements OnInit {

  constructor(
    public authentication : AuthenticationService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  
  logout() {
    this.authentication.logout()
    this.router.navigate(['forms'])
  }

}
