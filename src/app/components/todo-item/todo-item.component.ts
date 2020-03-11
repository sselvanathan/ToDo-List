import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

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
    console.log(todo);
  }
}
