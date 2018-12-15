import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
const routes: Routes = [
    { path: 'create',component: CreateEmployeeComponent },
    { path: '', component: ListEmployeeComponent}
    
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CreateEmployeeComponent,ListEmployeeComponent];