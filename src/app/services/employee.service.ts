import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataSharingService } from './data-sharing.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public url: string = "http://localhost:8081/employees/";
  private credentials: any;
  private headers!: HttpHeaders;
  
  constructor(private _httpClient: HttpClient, private dataSharingService: DataSharingService) { }

  private getCredentials() {
    this.dataSharingService.loginData.subscribe(data => {
      this.credentials = data;
    });
    this.headers = new HttpHeaders({Authorization: 'Basic '+btoa(this.credentials.username+":"+this.credentials.password)});
  }

  public getAllEmployees(): any {
    this.getCredentials();
    return this._httpClient.get(this.url, {'headers': this.headers});
  }

  public addEmployee(employee: any) {
    this.getCredentials();
    return this._httpClient.post(this.url, employee, {'headers': this.headers});
  }

  public getEmployeeById(id: number): any {
    this.getCredentials();
    return this._httpClient.get(this.url+id, {'headers': this.headers});
  }

  public updateEmployee(id: number, employee: any) {
    this.getCredentials();
    return this._httpClient.put(this.url+id, employee, {'headers': this.headers});
  }

  public deleteEmployee(id: number): any {
    this.getCredentials();
    return this._httpClient.delete(this.url+id, {'headers': this.headers});
  }
}
