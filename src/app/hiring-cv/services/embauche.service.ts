import { Injectable } from '@angular/core';
import { Personne } from '../cv/cv.model';


@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private embauchees : Personne[] = [];
  constructor() { }
  getEmbauchees() : Personne[] {
    return this.embauchees
  }
  embaucher(personne: Personne) {
    const index = this.embauchees.indexOf(personne)
    if (index === -1) {
      this.embauchees.push(personne)
    } else {
      alert(`${personne.name} exists `)
    }
  }
}
