
import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';   
  
import { HttpModule } from '@angular/http';  
import { FormsModule } from '@angular/forms';  
  
import { AppComponent } from './app.component';  
  
import { CommonService } from './common.service';  
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ListEmployeeComponent } from './list-employee/list-employee.component'; 
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

@NgModule({  
  declarations: [  
    AppComponent,
    routingComponents,
    ListEmployeeComponent,
    CreateEmployeeComponent,
  ],  
  imports: [  
    BrowserModule,HttpModule,FormsModule, 
    AppRoutingModule 
  ],  
  providers: [CommonService],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  