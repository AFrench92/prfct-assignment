import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {}

  getEmployees = (): any => {
    return this.http.get(`${this.baseUrl}/employees`);
  };
}
