import {Component, Injectable} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SidebarComponent} from './components/user/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
@Injectable({
  providedIn: 'root' // This makes the service available application-wide
})
export class AppComponent {
  title = 'Task2Petone2';

  isLoggedIn = false;

}
