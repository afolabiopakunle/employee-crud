import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee-services.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: IEmployee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
   this.employees = this.employeeService.getEmployees()
  }

  delete(id: Number) {
    this.employeeService.deleteEmployee(id)
  }
}
