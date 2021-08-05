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
      id: 1,
      name: 'Stacy Jackson',
      jobTitle: 'Actress',
      phoneNumber: 8030021155,
      email: 'stacyjackson@yahoo.com'
    },
    {
      id: 2,
      name: 'Tony Shawnt',
      jobTitle: 'Musician',
      phoneNumber: 8024447545,
      email: 't.shawnt@skype.com'
    },
    {
      id: 3,
      name: 'Michael Denver',
      jobTitle: 'Engineer',
      phoneNumber: 8024885959,
      email: 'denver2001.michael@gmail.com'
    },
    {
      id: 4,
      name: 'Zara Larson',
      jobTitle: 'Angular Developer',
      phoneNumber: 8108192820,
      email: 'zaralarson@hotmail.com'
    },{
      id: 5,
      name: 'David Phillips',
      jobTitle: 'Sr. Java Developer',
      phoneNumber: 8092240454,
      email: 'phillips.david@microsoft.com'
    },
  ];

}
