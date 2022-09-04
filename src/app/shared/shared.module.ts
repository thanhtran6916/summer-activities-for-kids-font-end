import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderHomeComponent } from './header-home/header-home.component';



@NgModule({
  declarations: [
    HeaderHomeComponent
  ],
  exports: [
    HeaderHomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
