import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const API_AUTH_LINK = 'https://immense-citadel-91115.herokuapp.com/api/Users/login'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http : HttpClient,
    private router : Router
  ) { }

login(credentials) {
  return this.http.post(API_AUTH_LINK,credentials)
  }
logout() {
  localStorage.removeItem('token')
}
isAuthenticated() {
  return !!localStorage.getItem('token')
}

} 
