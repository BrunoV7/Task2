import {Component, Injectable} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
