import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service'; 
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import {Router} from '@angular/router';
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private newService :CommonService,private router: Router,) { }
  Repdata;
  valbutton = "Save";
  ngOnInit() {
    
  }
  onSave = function(employee) {    
    employee.mode= this.valbutton;  
     this.newService.saveEmployee(employee)  
     .subscribe();
     this.router.navigate(['']);
     location.reload();
   } 

 
}
