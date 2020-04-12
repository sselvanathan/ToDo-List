import {Component, OnInit} from '@angular/core';
import {TodoModel} from '../../models/todoModel';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: TodoModel[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
        this.todos = todos;
      }
    );
  }

  deleteTodo(todo: TodoModel) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: TodoModel) {
    // tslint:disable-next-line:no-shadowed-variable
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}
