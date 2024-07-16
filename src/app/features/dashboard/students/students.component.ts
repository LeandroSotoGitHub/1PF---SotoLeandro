import { Component } from '@angular/core';
import { Students } from './models';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  studentsList: Students[] = [
    {id: 1, name: 'pepe', lastName: 'ramos', course: 'angular', email: 'email@test.com'},
    {id: 2, name: 'santiago', lastName: 'terco', course: 'html', email: 'email@test.com'},
    {id: 3, name: 'pedro', lastName: 'ramirez', course: 'css', email: 'email@test.com'}
  ]

  updateStudentsList(newStudents: Students[]) {
    this.studentsList = [...this.studentsList, ...newStudents]
  }

  deleteStudent(id: number) {
    this.studentsList = this.studentsList.filter(student => student.id !== id);
  }
}
