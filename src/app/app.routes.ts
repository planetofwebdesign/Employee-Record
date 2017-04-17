import { Routes , RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmpolyeeComponent } from './add-empolyee/add-empolyee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
const routes: Routes = [

{path: '', redirectTo: 'employees', pathMatch: 'full'},
{path: 'employees' , component: EmployeeComponent},
{ path: 'employees/add' , component: AddEmpolyeeComponent },
{ path: 'employees/edit/:id', component: EditEmployeeComponent }
];

export const routing = RouterModule.forRoot(routes);