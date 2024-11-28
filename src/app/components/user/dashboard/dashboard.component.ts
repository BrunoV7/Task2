import { Component } from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    SidebarComponent
  ],
  templateUrl: './dashboard.component.html',
  standalone: true,
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
