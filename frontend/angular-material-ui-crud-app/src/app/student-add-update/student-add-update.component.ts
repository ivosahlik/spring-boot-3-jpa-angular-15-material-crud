import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../service/student.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Student} from "../shared/student";

@Component({
  selector: 'app-student-add-update',
  templateUrl: './student-add-update.component.html',
  styleUrls: ['./student-add-update.component.scss']
})
export class StudentAddUpdateComponent implements OnInit{

studentForm:FormGroup;

  qualification: string[] =[
    'Java Backend Developer',
    'Kotlin Developer',
    'Frontend Developer',
    'Angular Js',
    'Vue Js',
    'React Js',
  ];

  grade: string[] =[
    'Junior',
    'Middle',
    'Senior'
  ];

  constructor(
    private _fb: FormBuilder,
    private _studentService: StudentService,
    private _dialogRef: MatDialogRef<StudentAddUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
       this.studentForm = this._fb.group({
          firstName: '',
          lastName: '',
          email: '',
          age: '',
          gender: '',
          qualification: '',
          grade: '',
    })
  }

   ngOnInit(): void {
    this.studentForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.studentForm.valid) {
      const studentData: Student = this.studentForm.value;
      console.log('Submitted Student:', studentData);
      if (this.data) {
        this._studentService
          .updateStudent(this.data.id, studentData)
          .subscribe({
            next: (val: any) => {
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._studentService.addStudent(studentData)
          .subscribe({
              next: (val: any) => {
                this._dialogRef.close(true);
              },
              error: (err: any) => {
                console.error(err);
              },
          });
      }
    }
  }
}
