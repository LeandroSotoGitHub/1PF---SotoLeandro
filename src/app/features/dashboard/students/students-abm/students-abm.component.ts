import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from '../components/student-dialog/student-dialog.component';
import { Students } from '../models';

@Component({
  selector: 'app-students-abm',
  templateUrl: './students-abm.component.html',
  styleUrl: './students-abm.component.css'
})
export class StudentsAbmComponent {
  @Output() studentsListChanged = new EventEmitter<Students[]>()

  studentsList: Students[] = []
  constructor (private matDialog: MatDialog){}

  openDialog(): void{
    const dialogRef = this.matDialog.open(StudentDialogComponent)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentsList.push(result)
        this.studentsListChanged.emit(this.studentsList)
      }
    })
  }

}
