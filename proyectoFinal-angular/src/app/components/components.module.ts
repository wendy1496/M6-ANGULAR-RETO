import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountsComponent } from './accounts/accounts.component';
import { OperationsComponent } from './operations/operations.component';
import { ComponentRoutingModule } from './components.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionalComponent } from './transactional/transactional.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ContentComponent,
    AccountsComponent,
    OperationsComponent,
    DashboardComponent,
    TransactionalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ComponentRoutingModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent
  ],
})
export class ComponentsModule { }
