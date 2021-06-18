import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee-services.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  header: string;
  form: FormGroup;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private employeeService: EmployeeService, private router: Router) { }
  
  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')
   this.header = this.id === 0 ? 'Add Developer': 'Update Developer'

   this.form = this.fb.group({
     id: ['', Validators.required],
     name: ['', Validators.required],
     jobTitle: ['', Validators.required],
     email: ['', Validators.required],
     phoneNumber: ['', Validators.required],
   })
  }


  submit(form: IEmployee) {
    this.employeeService.addEmployee(form)
    this.router.navigateByUrl('');
  }
}
