import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor() { }

  students:any[] = [];

  getLocalStudents():any[]{
    this.students = JSON.parse(localStorage.getItem("students"));
    return this.students;
  }
  setLocalStudents(){
    return localStorage.setItem('students',JSON.stringify(this.students));
  }
  addStudent(student){
    this.students.push(student);
    this.setLocalStudents();
  }
}
