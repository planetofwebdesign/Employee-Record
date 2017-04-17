
import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeModel} from '../models/employeeModel';

@Injectable()
export class SearchService{

	
	constructor(private router: Router){}

	employeesData: EmployeeModel[] = [{
					"id": 1,
					"name": "Jhon",
					"phone": "9999999999",
					"address":
					{
					"city": "Pune",
					"address_line1":"ABC road",
					"address_line2":"XYZ building",
					"postal_code":"12455"
					}
					}, {"id": 2,
					"name": "Jacob",
					"phone": "AZ99A99PQ9",
					"address":
					{
					"city": "Pune",
					"address_line1":"PQR road",
					"address_line2":"ABC building",
					"postal_code":"13455"
					}
					}, {
					"id": 3,
					"name": "Ari",
					"phone": "145458522",
					"address":
					{
					"city": "Mumbai",
					"address_line1":"ABC road",
					"address_line2":"XYZ building",
					"postal_code":"12455"
					}
	}];



	getEmployees() : EmployeeModel[] {
		return this.employeesData;
	}


	searchEmployees(searchStr: string): EmployeeModel[] {
		
		if(searchStr){
			return this.employeesData.filter((value) => {
						
						if(
							value.address.city.toLowerCase().indexOf(searchStr.toLowerCase())!=-1 ||
							value.name.toLowerCase().indexOf(searchStr.toLowerCase())!=-1
						){
							return true;
						}
					});
		}else{
			return this.employeesData;
		}

	}

	getEmployeeById(id: string): EmployeeModel[]{
		
		return this.employeesData.filter((value) => {
						
						return	value.id === parseInt(id);
		});
	}


	saveForm(values: any): void {

		
		let ids=this.employeesData.map((value) => {
			return value.id;
		});

		let newId=Math.max.apply(null,ids);

		values["id"]=newId+1;
		this.employeesData.push(values);
		
		this.router.navigate(['']);
	}


	updateForm(values: any): void {
	
		
		
		let filteredData=this.employeesData.forEach((data) => {
			
			if(data.id === parseInt(values.id)) {

				data.name=values.name;
				data.phone=values.phone;
				data.address.city = values.address.city;
				data.address.address_line1 = values.address.address_line1;	
				data.address.address_line2 = values.address.address_line2;
				data.address.postal_code= values.address.postal_code;
			}
		});

		
		
		this.router.navigate(['']);
	}

};
