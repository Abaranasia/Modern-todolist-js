/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
export class Todo {
  static fromJson({ task, id, completed, created }) {
    // this static method converts an object to a todo instance
    const tempTodo = new Todo(task);

    tempTodo.id = id;
    tempTodo.completed = completed;
    tempTodo.created = created;

    return tempTodo;
  }

  constructor(task) {
    this.task = task;

    this.id = new Date().getTime();
    this.completed = false;
    this.created = new Date();
  }
}
