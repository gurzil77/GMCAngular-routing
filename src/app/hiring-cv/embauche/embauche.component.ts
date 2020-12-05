import { Component, OnInit } from '@angular/core';
import { Personne } from '../cv/cv.model';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  embauchees : Personne[];
  constructor(
    private embaucheService : EmbaucheService
  ) { }

  ngOnInit(): void {
    this.embauchees = this.embaucheService.getEmbauchees()
  }

}
