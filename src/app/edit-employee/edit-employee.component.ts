import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { 
	FormBuilder, 
	FormGroup ,
	Validators,
	FormControl
	} from '@angular/forms';

import { SearchService } from '../services/searchAndFilter.service';
import { EmployeeModel } from '../models/employeeModel';

function numberValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^\d+$/)) {
    return {invalidNumber: true};
  }
}


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {


  id: string;
  editEmployeeForm: FormGroup;
  employeeData: EmployeeModel;

  constructor( private fb: FormBuilder,
               private searchService: SearchService,
               private route: ActivatedRoute) { 

    this.route.params.subscribe(params => { this.id = params['id']; });

    this.employeeData=this.searchService.getEmployeeById(this.id)[0];

  	this.editEmployeeForm= fb.group({

  		'id': [this.employeeData.id],
  		'name': [this.employeeData.name , Validators.compose([
  				Validators.required,Validators.minLength(4)
  			])],
  		'phone': [this.employeeData.phone ,Validators.compose([

  					Validators.required, numberValidator
  			])],
  		'city': [this.employeeData.address.city],
  		'address1': [this.employeeData.address.address_line1],
  		'address2': [this.employeeData.address.address_line2],
  		'postal_code': [this.employeeData.address.postal_code]

  	});

  }
  ngOnInit() {
  }


onUpdate(value: any): void {
    
    let formattedValues={
      "id": value.id,
    	"name": value.name,
    	"phone": value.phone,
    	"address" :{

			"city": value.city,
			"address_line1":  value.address1,
			"address_line2": value.address2,
			"postal_code":  value.postal_code
    	}
    };

    this.searchService.updateForm(formattedValues);
   
  }
}
