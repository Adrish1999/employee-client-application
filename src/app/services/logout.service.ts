import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  public url: string = "http://localhost:8081/employees/";

  constructor(private _httpClient: HttpClient) { }

  public logout(username: string, password: string) {
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this._httpClient.get(this.url+"logout", {headers, responseType: 'text' as 'json'});
  }
}
