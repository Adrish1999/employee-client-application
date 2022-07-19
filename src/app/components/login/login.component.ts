import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  public message: any;

  constructor(private _service: LoginService, private router: Router, private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  public doLogin() {
    this._service.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      (res: any) => {
        this.message = res;
        this.dataSharingService.updateLoginData({
          username: this.loginForm.value.username,
          password: this.loginForm.value.password
        })
        this.router.navigateByUrl("/home");
      },
      (err: HttpErrorResponse) => {
        console.error(err);
      }
    );
  }

}
