import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(public http:HttpClient) { }

  getStudents(){
    return this.http.get("http://localhost:3000/students")
  }

  addStudents(student:any){
    return this.http.post("http://localhost:3000/students",student)
  }

  deleteStudents(id:any){
    return this.http.delete(`http://localhost:3000/students/${id}`)
  }

  updateStudents(student:any){
    return this.http.put(`http://localhost:3000/students/${student.id}`,student)

  }
}
