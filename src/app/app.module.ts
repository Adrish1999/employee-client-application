import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchAllEmployeesComponent } from './components/fetch-all-employees/fetch-all-employees.component';
import { EmployeeService } from './services/employee.service';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FetchEmployeeByIdComponent } from './components/fetch-employee-by-id/fetch-employee-by-id.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LogoutService } from './services/logout.service';

@NgModule({
  declarations: [
    AppComponent,
    FetchAllEmployeesComponent,
    AddEmployeeComponent,
    FetchEmployeeByIdComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService, LoginService, LogoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
