import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import {routing} from './app.routes';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmpolyeeComponent } from './add-empolyee/add-empolyee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EmployeeComponent,
    AddEmpolyeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
   ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
