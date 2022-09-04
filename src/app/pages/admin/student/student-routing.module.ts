import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentListComponent} from "../../../features/student/student-list/student-list.component";
import {StudentInfoComponent} from "../../../features/student/student-info/student-info.component";

const routes: Routes = [
  {
    path: '',
    component: StudentListComponent
  },
  {
    path: 'id',
    component: StudentInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
