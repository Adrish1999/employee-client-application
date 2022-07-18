import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public employeeForm!: FormGroup;
  public addEmployeeResponse: any;
  constructor(private _service: EmployeeService) { }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      empId: new FormControl(),
      name: new FormControl(),
      designation: new FormControl(),
      dateOfBirth: new FormControl(),
      managerId: new FormControl(),
      salary: new FormControl(),
      deptId: new FormControl(),
    });
  }

  public onSubmit() {
    this._service.addEmployee(this.employeeForm.value).subscribe(
      (res: any) => {
        this.addEmployeeResponse = res;
      },
      (err: HttpErrorResponse) => {
        console.error(err);
      }
    );
  }

}
