import { Component, OnInit } from '@angular/core';

import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.studentService.getStudents()
    .subscribe(students => this.students = students);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.studentService.addStudent({ name } as Student)
      .subscribe(hero => {
        this.students.push(hero);
      });
  }

  delete(hero: Student): void {
    this.students = this.students.filter(h => h !== hero);
    this.studentService.deleteHero(hero).subscribe();
  }

}
