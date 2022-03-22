import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessProcessComponent } from './business-process.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[ 
  {
    path:'',
    component:BusinessProcessComponent
  }
]

@NgModule({
  declarations: [
    BusinessProcessComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BusinessProcessModule { }
