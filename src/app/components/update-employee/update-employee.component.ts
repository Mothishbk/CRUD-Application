import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeserviceService } from 'src/app/employeeservice.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employeedata!:any;
  empforms!:FormGroup;
  constructor(private empservice:EmployeeserviceService,private router:Router) { 
    this.employeedata=this.router.getCurrentNavigation()?.extras.state?.empl;
    console.log(this.employeedata);
  }

  ngOnInit(): void {
    this.empforms=new FormGroup({
      'eid':new FormControl(this.employeedata.eid),
      'name': new FormControl(this.employeedata.name),
      'salary': new FormControl(this.employeedata.salary)
    })
  }

onsubmit(){
  this.empservice.putemployee(this.empforms.value).subscribe(data =>{
    this.router.navigate(['employees']);
  })
}
}
