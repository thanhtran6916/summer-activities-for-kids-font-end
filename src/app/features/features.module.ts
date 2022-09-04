import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentInfoComponent } from './student/student-info/student-info.component';



@NgModule({
  declarations: [
  
    StudentListComponent,
       StudentInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
