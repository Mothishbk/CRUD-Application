import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { ViewDetailComponent } from './components/view-detail/view-detail.component';

const routes: Routes = [
  {
    path:'',redirectTo:'employees',pathMatch:'full'
  },
  {
  path:'employees', component: EmployeeListComponent
},
{
  path:'update-employee/:id' , component:UpdateEmployeeComponent
},
{
  path:'view-employee/:id',component:ViewDetailComponent
},
{
  path:'create-employee', component:CreateEmployeeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
