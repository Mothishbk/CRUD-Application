import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private httpClient: HttpClient) { }
getemployees():Observable<Employee[]>{
return this.httpClient.get<Employee[]>("http://localhost:8080/api/v1/employee");
}
createemployee(employee:Employee):Observable<object>{
  return this.httpClient.post("http://localhost:8080/api/v1/employeeadd",employee)
}
putemployee(employee:Employee):Observable<object>{
  return this.httpClient.put("http://localhost:8080/api/v1/employeeupdate/"+employee.eid,employee)
}
deleteemployee(id:number):Observable<object>{
  return this.httpClient.delete("http://localhost:8080/api/v1/employeedelete/"+id)
}
}
