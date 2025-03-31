import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AuthGuard } from '../auth.guard';
import { OperationsComponent } from './operations/operations.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionalComponent } from './transactional/transactional.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [AuthGuard], 
    children: [
      { path: 'accounts', component: AccountsComponent },
      { path: 'operations', component: OperationsComponent },
      { path: 'transactional', component: TransactionalComponent },
      { path: '', redirectTo: 'accounts', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
