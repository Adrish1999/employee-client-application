import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-fetch-employee-by-id',
  templateUrl: './fetch-employee-by-id.component.html',
  styleUrls: ['./fetch-employee-by-id.component.css']
})
export class FetchEmployeeByIdComponent implements OnInit {

  public employeeSearchForm!: FormGroup;
  public employee: any;
  public errorResponse!: string;
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
      },
      (err: HttpErrorResponse) => {
        this.employee = null;
        this.errorResponse = "No Employee Found With Id " + this.employeeSearchForm.value.id;
      }
    );
  }

}
