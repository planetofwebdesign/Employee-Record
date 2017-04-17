import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import {routing} from './app.routes';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmpolyeeComponent } from './add-empolyee/add-empolyee.component';
import { SearchService } from './services/searchAndFilter.service';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EmployeeComponent,
    AddEmpolyeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
   ],
  providers: [
    SearchService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
