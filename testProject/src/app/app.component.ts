import { Component, OnInit } from '@angular/core';  
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import {CommonService} from './common.service';  
   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent {  
    
     
  constructor(private newService :CommonService,) {   }  
   Repdata;  
   valbutton ="Save";  
   
   
ngOnInit() {    
  this.newService.GetEmployee().subscribe(data =>  this.Repdata = data)  
}  
  
onSave = function(employee,isValid: boolean) {    
 employee.mode= this.valbutton;  
  this.newService.saveEmployee(employee)  
  .subscribe(data =>  {  alert(data.data);
    this.ngOnInit();    
  }   
  , error => this.errorMessage = error )  
    
}      
edit = function(kk) {  
this.id = kk._id;  
this.name= kk.name;  
this.DOB= kk.DOB;
this.department= kk.department;
this.YearsOfExperience= kk.YearsOfExperience  
this.valbutton ="Update";  
}  
  
delete = function(id) {  
this.newService.deleteEmployee(id)  
.subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
}  
  
}  