import { Component, OnInit } from '@angular/core';
import { 
	FormBuilder, 
	FormGroup ,
	Validators,
	FormControl
	} from '@angular/forms';

import { SearchService } from '../services/searchAndFilter.service';

function numberValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^\d+$/)) {
    return {invalidNumber: true};
  }
}

@Component({
  selector: 'app-add-empolyee',
  templateUrl: './add-empolyee.component.html',
  styleUrls: ['./add-empolyee.component.css']
})
export class AddEmpolyeeComponent implements OnInit {


  addEmployeeForm: FormGroup;

  constructor( private fb: FormBuilder, private searchService: SearchService) { 
  	this.addEmployeeForm= fb.group({
  		
  		'name': ['' , Validators.compose([
  				Validators.required,Validators.minLength(4)
  			])],
  		'phone': ['',Validators.compose([

  					Validators.required, numberValidator
  			])],
  		'city': [''],
  		'address1': [''],
  		'address2': [''],
  		'postal_code': ['']

  	});

  }

  ngOnInit() {
  }


  onSubmit(value: any): void {
    
    let formattedValues={
    	
    	"name": value.name,
    	"phone": value.phone,
    	"address" :{

			"city": value.city,
			"address_line1":  value.address1,
			"address_line2": value.address2,
			"postal_code":  value.postal_code
    	}
    };

    this.searchService.saveForm(formattedValues);
   
  }

  
}
