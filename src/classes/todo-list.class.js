/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
export class TodoList {
  constructor() {
    this.loadFromLocalStorage();
  }

  newTodo(todo) {
    this.todos.push(todo);
    this.saveToLocalStorage();
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    // just != because compares strings and number
    this.saveToLocalStorage();
  }

  toggleTodo(id) {
    for (const todo of this.todos) {
      if (todo.id == id) { // Only == because we compare string and number
        todo.completed = !todo.completed;
        break;
      }
    };
    this.saveToLocalStorage();
  }

  deleteCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  loadFromLocalStorage() {
    this.todos = (localStorage.getItem('todos'))
      ? JSON.parse(localStorage.getItem('todos', this.todos))
      : [];
  }
}
