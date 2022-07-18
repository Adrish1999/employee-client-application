import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public url: string = "http://localhost:8081/employees/";

  constructor(private _httpClient: HttpClient) { }

  public getAllEmployees(): any {
    return this._httpClient.get(this.url);
  }

  public addEmployee(employee: any) {
    return this._httpClient.post(this.url, employee);
  }

  public getEmployeeById(id: number): any {
    return this._httpClient.get(this.url+id);
  }

  public updateEmployee(id: number, employee: any) {
    return this._httpClient.put(this.url+id, employee);
  }

  public deleteEmployee(id: number): any {
    return this._httpClient.delete(this.url+id);
  }
}
