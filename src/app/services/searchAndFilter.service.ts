
import {Injectable} from '@angular/core';
import {EmployeeModel} from '../models/employeeModel';

@Injectable()
export class SearchService{

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

};
