import { Component } from '@angular/core';
import { Todo } from '../core/models/todo';
import { CalculService } from '../service/calcul.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  listTodo: Todo[] = [
    { userId: 1, id: 1, title: "delectus aut autem", completed: false },
    { userId: 1, id: 2, title: "quis ut nam facilis et officia qui", completed: false },
    { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
    { userId: 1, id: 4, title: "quo adipisci enim quam ut ab", completed: true }
  ];
  completedCount: number = 0;

  constructor(private calculService : CalculService) {
    this.completedCount = this.calculService.getNumberOf(this.listTodo, 'completed', true);
  }

  showBilan() {
    alert(`Number of completed todos: ${this.completedCount} out of ${this.listTodo.length}`);
  }

}
