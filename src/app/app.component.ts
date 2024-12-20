import { Component } from '@angular/core';
import { StudentsService } from './students.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loading-spinner';

  studentForm:any;
  students:any=[];
  editFlag:boolean=false;

  constructor(public ss:StudentsService,public fb:FormBuilder){
  this.studentForm=this.fb.group({
    id:[''],
    name:[''],
    phonenumber:[''],
    email:['']
  })
  this.getAllStudents()
  }
  getAllStudents(){
    this.ss.getStudents().subscribe((res)=>{
      this.students=res;
    })

  }

  addStudent(){
    this.ss.addStudents(this.studentForm.value).subscribe((res)=>{
      this.getAllStudents()
    })
  }

  deleteStudent(id:any){
    this.ss.deleteStudents(id).subscribe((res)=>{
      this.getAllStudents()
    })
  }

  editStudent(x:any){
    this.editFlag=true;
   // this.currentId=student.id;
    this.studentForm.setValue(x)
  }

  updateStudent(){
    this.ss.updateStudents(this.studentForm.value).subscribe((res)=>{
      this.getAllStudents();
      this.editFlag=false;
    })
  }
 
 



}
