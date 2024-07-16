import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Students } from '../models';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css'
})

export class StudentsListComponent {
  @Input() studentsList: Students[] = [];

  @Output() deleteStudent = new EventEmitter<number>()
  @Output() editStudent = new EventEmitter<Students>()

  displayedColumns: string[] = ['id', 'name', 'lastName', 'course', 'email', 'actions']

  onDelete(id: number) {
    this.deleteStudent.emit(id);
    console.log(id)
  }

  onEdit(student: Students) {
    this.editStudent.emit(student)
  }
}
