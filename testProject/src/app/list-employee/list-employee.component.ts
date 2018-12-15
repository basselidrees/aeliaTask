import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';  
import { error } from 'util';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor(private newService :CommonService,) { }
  Repdata;
  valbutton='Update';


  ngOnInit() {
    this.newService.GetEmployee().subscribe(data => this.Repdata = data)
  }
  onSave = function(employee) {    
    employee.mode= this.valbutton;  
     this.newService.saveEmployee(employee)  
     .subscribe();
     location.reload();
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
    var x = confirm("Are you sure you want to delete this Employee?");
    if(x == true){
    this.newService.deleteEmployee(id)  
    .subscribe();
    }
    location.reload();
  } 
}
