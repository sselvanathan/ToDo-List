import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {TodoModel} from '../../models/todoModel';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: TodoModel;
  @Output() deleteTodo: EventEmitter<TodoModel> = new EventEmitter();

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
  }

  setClasses() {
    return {
      todo: true,
      'is-complete': this.todo.completed,
    };
  }

  onToggle(todo) {
    todo.completed = !todo.completed;
    // tslint:disable-next-line:no-shadowed-variable
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
