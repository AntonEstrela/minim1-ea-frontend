import { Component, OnInit } from '@angular/core';
import { Brote } from '../models/brote';
import { BrotesService } from '../brotes.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-brotes',
  templateUrl: './brotes.component.html',
  styleUrls: ['./brotes.component.css']
})
export class BrotesComponent implements OnInit {

  brotes: Brote[];
  selected: Brote;
  constructor(private brotesService: BrotesService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getSubjects();
  }

  getSubjects(): void {
    this.brotesService.getBrotes().subscribe(brotes => this.brotes = brotes);
  }
  onSelect(brote: Brote){
    this.selected = brote;
  }
  update(brote: Brote){
    this.messageService.add("updating " + brote.nombre);
    //this.brotesService.deleteBrote(brote.nombre);
    //this.brotesService.addBrote(brote);
    this.brotesService.updateBrote(brote);
    this.messageService.add("updated");
  }
  /*
  add(name: string, descripcion: string, fechainicio: string, fechafinal: string): void {
    name = name.trim();
    if (!name) { return; }
    this.brotesService.addSubject(({id: 'qwerty', name, students: null} as Subject))
      .subscribe(subject => {
        this.subjects.push(subject);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  */
}
