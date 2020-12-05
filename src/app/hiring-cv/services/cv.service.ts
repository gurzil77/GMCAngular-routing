import { Injectable } from '@angular/core';
import { Personne } from '../cv/cv.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const API_LINK = "https://immense-citadel-91115.herokuapp.com/api/personnes/"
@Injectable({
  providedIn: 'root'
})
export class CvService {
   //firstCV: Personne
   //secondCV: Personne
   // thirdCV: Personne
   personnes: Personne[] = [];
   selectedPersonSubject = new Subject<Personne>();
 
  
   constructor(
    private http : HttpClient
   ) { 
    /*this.personnes = [ { 
    id: 1,
    age: 23,
    cin: 1234,
    firstname: "Mike",
    name: "Stewart",
    path: "Path1",
    job: "Engineer"
    },
     {  
    id: 2,
    age: 33,
    cin: 5415,
    firstname: "Michael",
    name: "Jordan",
    path: "Path2",
    job: "Doctor"
    },
   {
    id: 3,
    age: 45,
    cin: 8354,
    firstname: "George",
    name: "Bush",
    path: "Path3",
    job: "Lawyer"
    }
  ]*/}


  getPersonsListObersvables() : Observable<Personne[]> {
    return  this.http.get<Personne[]>(API_LINK)
  }
  /*getPersonById (id): Personne {
    return this.personnes.find (person => person.id === +id)
  } */
  getPersonByIdObservable(id) : Observable<Personne> {
    return this.http.get<Personne>(API_LINK+`/${id}`)
  }

  deletePerson(person : Personne) {
    const index = this.personnes.indexOf(person)
    if (index === -1) {
      alert('Person inexistent')
      return 0
    } else {
      this.personnes.splice(index, 1)
      return 1;
    }
  }
  /*addPerson (person : Personne) {
    const id = this.personnes[this.personnes.length - 1].id;
    person.id = id + 1; 
    this.personnes.push(person)
  } */

  addPerson (person: Personne) {
    const token = localStorage.getItem('token');
    if (token) {
      const header = new HttpHeaders().set('Authorization', token)
      return this.http.post(API_LINK, person, {header});
    } else {
      return this.http.post(API_LINK, person)}

  }

  clickedPerson(person: Personne) {
    this.selectedPersonSubject.next(person)
  }
}
