import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { LogoutService } from 'src/app/services/logout.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  public message: any;
  public credentials: any;

  constructor(private _service: LogoutService, private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    this.dataSharingService.loginData.subscribe(data => {
      this.credentials = data;
    });
  }

  public doLogout() {
    this._service.logout(this.credentials.username, this.credentials.password).subscribe(
      (res: any) => {
        this.message = res;
        this.dataSharingService.updateLoginData({
          username: '',
          password: ''
        });
      },
      (err: HttpErrorResponse) => {
        console.error(err);
      }
    );
  }

}
