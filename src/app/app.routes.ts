import { Routes } from '@angular/router';
import {Login2Component} from './components/auth/login2/login2.component';
import {DashboardComponent} from './features/dashboard/dashboard/dashboard.component';
import {PetsListComponent} from './features/pets/pets-list/pets-list/pets-list.component';
export const routes: Routes = [
  { path: "", redirectTo: "auth/login", pathMatch: "full" },
  { path: "auth", children:[
      { path: 'login', component: Login2Component }
    ] },
  { path: "user", children: [
      { path: 'tutor/dashboard', component: DashboardComponent },
      { path: 'tutor/pets', component: PetsListComponent },
      { path: 'tutor/agendamentos', component: Agendame },
    ]
  }
];
