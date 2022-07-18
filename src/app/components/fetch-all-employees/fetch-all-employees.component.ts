import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-fetch-all-employees',
  templateUrl: './fetch-all-employees.component.html',
  styleUrls: ['./fetch-all-employees.component.css']
})
export class FetchAllEmployeesComponent implements OnInit {

  public employees: any;

  constructor(private _service: EmployeeService) { }

  ngOnInit(): void {
    this._service.getAllEmployees().subscribe(
      (res: any) => {
        this.employees = res;
    }, 
    (err: HttpErrorResponse) => {
      console.error(err);
    });
  }
  
}
