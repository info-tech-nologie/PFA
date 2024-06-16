import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '/root/crm-frontend/src/app/app-routing.module';
import { AppComponent } from '/root/crm-frontend/src/app/app.component';
import { CompanyListComponent } from '/root/crm-frontend/src/app/company-list/company-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    UserListComponent,
    ClientListComponent,
    ClientFormComponent,
    LoginComponent,
    DashboardComponent ,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxCsvParserModule,
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
