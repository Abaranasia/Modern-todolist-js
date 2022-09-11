/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
export class TodoList {
  constructor() {
    this.todos = [];
  }

  newTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    // just != because compares strings and number
  }

  toggleTodo(id) {
    for (const todo of this.todos) {
      if (todo.id == id) {
        todo.completed = !todo.completed;
        break;
      }
    }
  }

  deleteCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }
}
