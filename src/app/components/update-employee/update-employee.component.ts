import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  public employeeSearchForm!: FormGroup;
  public employeeUpdateForm!: FormGroup;
  public employee!: any;
  public errorResponse!: string;
  public updateEmployeeResponse!: string;
  constructor(private _service: EmployeeService) { }

  ngOnInit(): void {
    this.employeeSearchForm = new FormGroup({
      id: new FormControl(1,[Validators.required])
    });
  }

  public onSearch() {
    this._service.getEmployeeById(this.employeeSearchForm.value.id).subscribe(
      (res: any) => {
        this.employee = res;
        this.errorResponse = "";
        this.employeeUpdateForm = new FormGroup({
          empId: new FormControl(this.employee.empId),
          name: new FormControl(this.employee.name),
          designation: new FormControl(this.employee.designation),
          dateOfBirth: new FormControl(this.employee.dateOfBirth),
          managerId: new FormControl(this.employee.managerId),
          salary: new FormControl(this.employee.salary),
          deptId: new FormControl(this.employee.deptId),
        });
      },
      (err: HttpErrorResponse) => {
        this.employee = null;
        this.errorResponse = "No Employee Found With Id " + this.employeeSearchForm.value.id;
        this.updateEmployeeResponse = "";
      }
    );
  }

  public onSubmit() {
    this._service.updateEmployee(this.employeeUpdateForm.value.empId, this.employeeUpdateForm.value).subscribe(
      (res: any) => {
        this.updateEmployeeResponse = "Successfully Updated Details of Employee with Id "+this.employeeUpdateForm.value.empId;
        this.employee = null;
      },
      (err: HttpErrorResponse) => {
        console.error(err);
        console.log(this.employeeUpdateForm.value);
      }
    );
  }

}
