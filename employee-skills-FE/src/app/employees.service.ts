import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Employee } from './interfaces/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {}

  getEmployees = (): any => {
    return this.http.get(`${this.baseUrl}/employees`);
  };

  postEmployee = (employee: Employee) => {
    return this.http.post(`${this.baseUrl}/employees`, employee);
  };

  newEmployee = (form: NgForm) => {
    // console.log(form.form.value);
    let employee: Employee = {
      name: form.value.name,
      skill: form.value.field,
      exp: parseInt(form.value.exp),
      address: form.value.address,
    };
    console.log(employee);
    this.postEmployee(employee).subscribe(() => {
      this.router.navigate(['/talent-page']);
    });
  };
}
