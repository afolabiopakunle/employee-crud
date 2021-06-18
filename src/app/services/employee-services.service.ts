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


  employees: IEmployee[] = [
    {
      id: 22,
      name: 'Jide Kosoko',
      position: 'Actor',
      phone: 8030021155,
      email: 'jide.kosoko@yahoo.com'
    },
    {
      id: 11,
      name: 'Tunde Ednut',
      position: 'Musician',
      phone: 8024447545,
      email: 'tunde.ednut@skype.com'
    }
  ];

  addEmployee(employee: IEmployee) {
    this.employees.push(employee)
  }

}
