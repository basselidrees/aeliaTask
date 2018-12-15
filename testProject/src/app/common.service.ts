import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
import { map } from "rxjs/operators";

  
@Injectable()  
export class CommonService {  
  
  constructor(private http: Http) { }  
  
  saveEmployee(employee){      
    return this.http.post('http://localhost:8080/api/SaveEmployee/', employee)  
            .pipe(map((response: Response) =>response.json()))              
  }  
  
  GetEmployee(){       
    return this.http.get('http://localhost:8080/api/getEmployee/')  
            .pipe(map((response: Response) => response.json()))              
  }  
 deleteEmployee(id){   
    return this.http.post('http://localhost:8080/api/deleteEmployee/',{'id': id})  
            .pipe(map((response: Response) =>response.json()))               
  }  
  
}  