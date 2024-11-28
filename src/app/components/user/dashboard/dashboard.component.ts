import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { User } from '../../../models/user';
import { Tasks } from '../../../models/tasks';

@Component({
  selector: 'app-dashboard',
  imports: [
    SidebarComponent
  ],
  templateUrl: './dashboard.component.html',
  standalone: true,
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  defaultUser: User = {
    id: 0,
    name: '',
    email: '',
    username: '',
    tasks: []
  };
  defaultTasks: Tasks[] = [];

  loadDefaultTasks() {
    for (let i = 0; i < 100; i++) {
      const newTask: Tasks = {
        id: i,
        name: `Task${i + 1}`,
        description: 'Wow such cool description!',
        status: 'AGUARDANDO',
        createdAt: new Date(),
        updatedAt: new Date(),
        user: { ...this.defaultUser } // Inicializa o usuário para cada tarefa
      };
      this.defaultTasks.push(newTask);
    }
  }

  ngOnInit(): void {
    this.defaultUser.id = 1;
    this.defaultUser.name = 'Bruno!';
    this.defaultUser.email = 'backupnobre62@gmail.com';
    this.defaultUser.username = 'backupnobre62@gmail.com';

    //tarefas
    this.defaultUser.tasks = this.defaultTasks;
    console.log(this.defaultUser);
  }

  constructor() {
    this.loadDefaultTasks();
  }
}
