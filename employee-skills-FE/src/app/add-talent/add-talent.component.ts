import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-add-talent',
  templateUrl: './add-talent.component.html',
  styleUrls: ['./add-talent.component.css'],
})
export class AddTalentComponent implements OnInit {
  constructor(private service: EmployeesService) {}

  ngOnInit(): void {}

  submitNewEmployee = (form: NgForm) => {
    // console.log(form.value);
    this.service.newEmployee(form);
  };
}
