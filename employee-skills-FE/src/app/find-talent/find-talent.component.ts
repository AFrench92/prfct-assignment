import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { throwError } from 'rxjs';
import { EmployeesService } from '../employees.service';
import { Employee } from '../interfaces/employee';

@Component({
  selector: 'app-find-talent',
  templateUrl: './find-talent.component.html',
  styleUrls: ['./find-talent.component.css'],
})
export class FindTalentComponent implements OnInit {
  employees: Employee[] = [];
  constructor(private service: EmployeesService) {}

  ngOnInit(): void {}

  getEmployees = () => {
    this.service.getEmployees().subscribe((response: Employee[]) => {
      this.employees = response;
      console.log(this.employees);
    });
  };

  submitIdSearch = (form: NgForm) => {
    console.log(form.value.id);
    this.service
      .getEmployeesId(form.value.id)
      .subscribe((response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      });
  };

  submitSkillSearch = (form: NgForm) => {
    console.log(form.value.field);
    this.service
      .getEmployeesSkill(form.value.field)
      .subscribe((response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      });
  };

  submitExpSearch = (form: NgForm) => {
    console.log(form.value.exp);
    this.service
      .getEmployeesExp(form.value.exp)
      .subscribe((response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      });
  };

  submitNameSearch = (form: NgForm) => {
    console.log(form.value.name);
    this.service
      .getEmployeesName(form.value.name)
      .subscribe((response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      });
    form.reset();
  };

  clearSearch = () => {
    this.employees = [];
  };
}
