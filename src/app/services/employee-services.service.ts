import { Injectable } from '@angular/core';
import { IEmployee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return this.employees;
  }

  addEmployee(employee: IEmployee) {
    this.employees.push(employee)
  }

  editEmployee(id) {
  let foundId = this.employees.find(id);
  console.log(foundId);
  }

  employees: IEmployee[] = [
    {
      id: 22,
      name: 'Jide Kosoko',
      position: 'Actor',
      phoneNumber: 8030021155,
      email: 'jide.kosoko@yahoo.com'
    },
    {
      id: 11,
      name: 'Tunde Ednut',
      position: 'Musician',
      phoneNumber: 8024447545,
      email: 'tunde.ednut@skype.com'
    }
  ];

}
