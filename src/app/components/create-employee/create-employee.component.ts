import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeserviceService } from 'src/app/employeeservice.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  empform!:FormGroup
  constructor(private empservice:EmployeeserviceService,private router:Router) { }

  ngOnInit(): void {
    this.empform = new FormGroup({
      'eid':new FormControl(0,Validators.required),
      'name': new FormControl('',Validators.required),
      'salary': new FormControl('',Validators.required)
    });
  }
  
  gotemployeelist(){
    this.router.navigate(['/employees']);
  }
  onsubmit(){
    this.empservice.createemployee(this.empform.value).subscribe(data=>{
      this.gotemployeelist();
    },error=>console.log(error));
    console.log(this.empform.value)
  
  }
}
