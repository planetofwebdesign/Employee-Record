import { Routes , RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmpolyeeComponent } from './add-empolyee/add-empolyee.component';
const routes: Routes = [

{path: '', redirectTo: 'employees', pathMatch: 'full'},
{path: 'employees' , component: EmployeeComponent},
{ path: 'employees/add' , component: AddEmpolyeeComponent }

];

export const routing = RouterModule.forRoot(routes);