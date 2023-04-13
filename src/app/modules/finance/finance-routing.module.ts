import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BillsComponent } from './components/bills/bills.component';

const routes: Routes = [{
    path:"",
    component: DashboardComponent,
    children: [
      { path:"home",  component: HomeComponent },
      { path:"bills", component: BillsComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
