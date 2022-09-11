/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import './styles.css';

import { TodoList } from './classes';
import { createTodoHtml } from './js/components';

export const todoList = new TodoList();

todoList.todos.forEach(createTodoHtml);
console.log(todoList);
