import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  public employeeSearchForm!: FormGroup;
  public employee: any;
  public errorResponse!: string;
  public deleteResponse: any;
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
        this.deleteResponse = "";
      },
      (err: HttpErrorResponse) => {
        this.employee = null;
        this.errorResponse = "No Employee Found With Id " + this.employeeSearchForm.value.id;
        this.deleteResponse = "";
      }
    );
  }

  public deleteEmployee() {
    this._service.deleteEmployee(this.employeeSearchForm.value.id).subscribe(
      (res: any) => {
        this.employee = null;
        this.deleteResponse = "Successfully Deleted Employee with Id "+this.employeeSearchForm.value.id;
        this.errorResponse = "";
      },
      (err: HttpErrorResponse) => {
        this.deleteResponse = "Failed Deleted Employee with Id "+this.employeeSearchForm.value.id;
        console.error(err);
      }
    );
  }
}
