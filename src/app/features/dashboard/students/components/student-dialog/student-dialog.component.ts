import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrl: './student-dialog.component.css'
})
export class StudentDialogComponent {
  studentsForm: FormGroup

  constructor (private fb: FormBuilder, private matDialogRef: MatDialogRef<StudentDialogComponent>){
    this.studentsForm = this.fb.group({
      id : [null, [Validators.required, Validators.pattern('[0-9]*')]], 
      name : [null, Validators.required],
      lastName : [null, Validators.required],
      course : [null, Validators.required],
      email : [null, [Validators.required, Validators.email]],
    })
  }

  onSubmit (){
    this.matDialogRef.close(this.studentsForm.value)
  }
}
