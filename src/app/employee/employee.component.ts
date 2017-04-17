import { Component, OnInit } from '@angular/core';

import { EmployeeModel } from '../models/employeeModel';
import { SearchService } from '../services/searchAndFilter.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeesData: EmployeeModel[];

  constructor( private searchService: SearchService) { 

  	this.employeesData = this.searchService.getEmployees();

  }

  ngOnInit() {}



  checkPhoneNumber(phoneNo: string) : boolean {

  		return /^\d+$/.test(phoneNo)

  }


  searchEmplyees(searchStr : string): void {
  		 
  		 this.employeesData = this.searchService.searchEmployees(searchStr);
  		

  }
  
 


}
