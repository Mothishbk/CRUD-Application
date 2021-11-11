import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeserviceService } from 'src/app/employeeservice.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employees: Employee[] = [];

  constructor(private employeeservice: EmployeeserviceService,private router:Router) { }

  ngOnInit(): void 
  {
    this.getemployees();
  }
  updateEmployee(id:number){
  let ids = this.employees.filter(emp => emp.eid === id);
  console.log(ids[0]);  
  this.router.navigate(['update-employee',id],{
    state:{empl:ids[0]}});
  }
  viewEmployees(id:number){
    console.log(id);
    let idl = this.employees.filter(empl => empl.eid === id);
    console.log(idl[0]);
    this.router.navigate(['view-employee',id],{
      state:{emps:idl[0]}
    });
  }
  deleteEmployee(id:number){
    this.employeeservice.deleteemployee(id).subscribe(data=>{
      this.getemployees();
    });
    
  }
  getemployees(){
    this.employeeservice.getemployees().subscribe(data=>{
      this.employees=data;
    })
  }
}
