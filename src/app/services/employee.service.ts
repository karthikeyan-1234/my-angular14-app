import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  GetEmployee():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>('https://localhost:7273/api/Employee/GetAllEmployees')
  }

  AddEmployee(emp:Employee):Observable<Employee>{
    return this.httpClient.post<Employee>('https://localhost:7273/api/Employee/AddEmployee',emp);
  }
}
