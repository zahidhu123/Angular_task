import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { DashboardComponent } from './dashboard/dashboard.component';


import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
 
  {path:'', redirectTo: 'login', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
 
  {
    path: 'dashboard',canActivate:[AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
