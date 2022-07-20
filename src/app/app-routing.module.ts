import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { FetchAllEmployeesComponent } from './components/fetch-all-employees/fetch-all-employees.component';
import { FetchEmployeeByIdComponent } from './components/fetch-employee-by-id/fetch-employee-by-id.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'addEmployee',
    component: AddEmployeeComponent
  },
  {
    path: 'listAllEmployees',
    component: FetchAllEmployeesComponent
  },
  {
    path: 'listEmployeeById',
    component: FetchEmployeeByIdComponent
  },
  {
    path: 'updateEmployee',
    component: UpdateEmployeeComponent
  },
  {
    path: 'deleteEmployee',
    component: DeleteEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
