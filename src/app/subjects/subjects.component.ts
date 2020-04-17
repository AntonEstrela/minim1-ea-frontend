import { Component, OnInit } from '@angular/core';
import { Subject } from '../models/subject';
import { Student } from '../models/student';
import { Phone } from '../models/phone';

import { AsignaturasService } from '../asignaturas.service';
import { MessageService } from '../message.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects: Subject[];

  constructor(private subjectService: AsignaturasService,  private messageService: MessageService) { }

  ngOnInit(): void {
    this.getSubjects();
  }

  getSubjects(): void {
    this.subjectService.getSubjects().subscribe(subjects => this.subjects = subjects);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.subjectService.addSubject(({id: 'qwerty', name, students: null} as Subject))
      .subscribe(subject => {
        this.subjects.push(subject);
      });
  }
  /*
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  */
}
