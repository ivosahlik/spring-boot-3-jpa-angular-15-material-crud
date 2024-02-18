import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http:HttpClient) { }
  public apiUrl = 'http://localhost:8080/api/v1';

  addStudent(data: any): Observable<any> {
    return this._http.post( `${this.apiUrl}/students`, data);
  }

  updateStudent(id: number, data: any): Observable<any> {
    return this._http.put(`${this.apiUrl}/students/${id}`, data);
  }

  getStudentList(): Observable<any> {
    return this._http.get(`${this.apiUrl}/students`);
  }

  deleteStudent(id: number): Observable<any> {
    return this._http.delete(`${this.apiUrl}/students/${id}`);
  }

}
