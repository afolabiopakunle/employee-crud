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

  deleteEmployee(id) {
    let employee = this.employees.find(employee => id == employee.id )
    console.log(employee);
    let index = this.employees.indexOf(employee)
    console.log(index);
    this.employees.splice(index, 1)
  }

  editEmployee(id) {
    return this.employees.find(employee => id === employee.id)
  }

  employees: IEmployee[] = [
    {
      id: 22,
      name: 'Jide Kosoko',
      jobTitle: 'Actor',
      phoneNumber: 8030021155,
      email: 'jide.kosoko@yahoo.com'
    },
    {
      id: 11,
      name: 'Tunde Ednut',
      jobTitle: 'Musician',
      phoneNumber: 8024447545,
      email: 'tunde.ednut@skype.com'
    },
    {
      id: 13,
      name: 'Dauda Dada',
      jobTitle: 'Engineer',
      phoneNumber: 8024885959,
      email: 'dauda.dada@gmail.com'
    }
  ];

}
