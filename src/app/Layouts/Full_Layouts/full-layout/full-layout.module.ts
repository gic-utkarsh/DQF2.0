import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { PanelBarModule } from '@progress/kendo-angular-layout';
import { IntlModule } from '@progress/kendo-angular-intl';
import { RouterModule, Routes } from '@angular/router';
import { IconsModule } from "@progress/kendo-angular-icons";
import { NavigationModule } from "@progress/kendo-angular-navigation";
const routes : Routes = [
  {
    path : '',
    component : FullLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/administration',
        pathMatch: 'full',
      },
      {
        path: 'administration',
        loadChildren: () =>
          import('../Dashboard/administration/administration.module').then(
            (m) => m.AdministrationModule
          ),
      },
      {
        path: 'business_rules',
        loadChildren: () =>
          import('../Dashboard/business-rules/business-rules.module').then(
            (m) => m.BusinessRulesModule
          ),

      },
      {
        path: 'business_process',
        loadChildren: () =>
          import('../Dashboard/business-process/business-process.module').then(
            (m) => m.BusinessProcessModule
          ),

      },
      {
        path: 'customers',
        loadChildren: () =>
          import('../Dashboard/customers/customers.module').then(
            (m) => m.CustomersModule
          ),

      },
      {
        path: 'usermanagement',
        loadChildren: () =>
          import('../Dashboard/user-management/user-management.module').then(
            (m) => m.UserManagementModule
          ),

      },
      {
        path: 'documents',
        loadChildren: () =>
          import('../Dashboard/documents/documents.module').then(
            (m) => m.DocumentsModule
          ),

      },
      {
        path: 'reports',
        loadChildren: () =>
          import('../Dashboard/reports/reports.module').then(
            (m) => m.ReportsModule
          ),

      },
    ],
  }

]

@NgModule({
  declarations: [
    FullLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    PanelBarModule,
    IconsModule,
    NavigationModule,
    IntlModule,
    RouterModule.forChild(routes)

  ]
})
export class FullLayoutModule { }
