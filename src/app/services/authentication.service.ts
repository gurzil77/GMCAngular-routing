import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const API_AUTH_LINK = 'https://immense-citadel-91115.herokuapp.com/api/Users/login'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http : HttpClient
  ) { }

login(credentials) {
  return this.http.post(API_AUTH_LINK,credentials)
}
} 
