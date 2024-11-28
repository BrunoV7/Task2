import { Routes } from '@angular/router';
import {Login2Component} from './components/auth/login2/login2.component';
import {DashboardComponent} from './components/user/dashboard/dashboard.component';
export const routes: Routes = [
  { path: "", redirectTo: "auth/login", pathMatch: "full" },
  { path: "auth", children:[
      { path: 'login', component: Login2Component }
    ] },
  { path: "user", children: [
      { path: 'dashboard', component: DashboardComponent }
    ]}
];
