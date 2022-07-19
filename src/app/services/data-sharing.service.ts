import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor() { }

  // BehaviorSubject needs initial value
  public loginData = new BehaviorSubject<any>({ username: ' ', password: ' ' });

  loginData$ = this.loginData.asObservable();

  // update with last login data  
  updateLoginData(loginData: any) {
    this.loginData.next(loginData)
  }
}
