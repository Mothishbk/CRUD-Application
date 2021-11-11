import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
  employeedatas!:any;

  constructor(private router:Router) { 
    this.employeedatas=this.router.getCurrentNavigation()?.extras.state?.emps;
    
  }

  ngOnInit(): void {
    
  }

}
