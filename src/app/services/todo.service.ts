import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TodoModel} from '../models/todoModel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl = 'http://localhost:80/todo';
  todosLimit = '?_limit=5';

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  deleteTodo(todo: TodoModel): Observable<TodoModel> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<TodoModel>(url, httpOptions);
  }

  toggleCompleted(todo: TodoModel): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  addTodo(todo: TodoModel): Observable<TodoModel> {
    return this.http.post<TodoModel>(this.todosUrl, todo, httpOptions);
  }
}
