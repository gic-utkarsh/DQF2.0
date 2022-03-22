import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavigationModule } from '@progress/kendo-angular-navigation';

// import { BusinessRuleComponent } from './Layouts/Full_Layouts/Dashboard/business-rule/business-rule/business-rule.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Layouts/Full_Layouts/full-layout/full-layout.module').then(m => m.FullLayoutModule)
  }
]

@NgModule({
  declarations: [
    AppComponent,
    // BusinessRuleComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
