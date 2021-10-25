import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Employee } from '../interfaces/employee';

@Component({
  selector: 'app-talent-page',
  templateUrl: './talent-page.component.html',
  styleUrls: ['./talent-page.component.css'],
})
export class TalentPageComponent implements OnInit {
  employees: Employee[] = [];
  constructor(private service: EmployeesService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees = () => {
    this.service.getEmployees().subscribe((response: Employee[]) => {
      this.employees = response;
      console.log(this.employees);
    });
  };
}
