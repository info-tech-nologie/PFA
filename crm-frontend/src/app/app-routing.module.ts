import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
//import { CompanyDetailsComponent } from './company-details/company-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { ClientListComponent } from './client-list/client-list.component';
//import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientFormComponent } from './client-form/client-form.component';
//import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  //{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/companies', pathMatch: 'full' }, // Redirection par défaut vers /companies
  { path: 'companies', component: CompanyListComponent  },
 //{ path: 'companies/:id', component: CompanyDetailsComponent, outlet: 'companyOutlet'   },
  // Ajoutez d'autres routes au besoin
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // Redirection par défaut vers /users
  { path: 'users', component: UserListComponent},
  //{ path: 'users/:id', component: UserDetailsComponent, outlet: 'userOutlet'},
  // Ajoutez d'autres routes au besoin
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'clients', component: ClientListComponent },
  { path: 'clients/new', component: ClientFormComponent },//.
 // { path: 'clients/:id', component: ClientDetailsComponent }
  // Ajoutez d'autres routes au besoin
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
