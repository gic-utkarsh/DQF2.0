import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[ 
  {
    path:'',
    component:AdministrationComponent
  }
]

@NgModule({
  declarations: [
    AdministrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdministrationModule { }
