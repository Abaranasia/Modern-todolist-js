/* eslint-disable import/no-cycle */
import { todoList } from '..';
import { Todo } from '../classes';

/* eslint-disable import/prefer-default-export */
const divTodoList = document.querySelector('.todo-list');
const taskInput = document.querySelector('.new-todo');

export const createTodoHtml = (todo) => {
  const htmlTodo = `
   <li data-id="${todo.id}" class=${todo.completed ? 'completed' : ''} >
      <div class="view">
        <input 
          class = "toggle"
          type = "checkbox"
          ${todo.completed ? 'checked' : ''} 
        >
        <label>${todo.task}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="Create a TodoMVC template">
    </li> 
  `;

  const div = document.createElement('div');
  div.innerHTML = htmlTodo;

  divTodoList.append(div.firstElementChild);
  // By doing this we avoid creating a new div per each task, just the li

  return div;
};

// Events
taskInput.addEventListener('keyup', (event) => {
  const { keyCode, target } = event;

  if (keyCode === 13 && target.value.length > 0) {
    const newTodo = new Todo(target.value);

    todoList.newTodo(newTodo);
    createTodoHtml(newTodo);

    taskInput.value = '';
  }
});

divTodoList.addEventListener('click', (event) => {
  const elementName = event.target.localName; // input, label, button...
  const todoElement = event.target.parentElement.parentElement;
  const todoId = todoElement.getAttribute('data-id');

  if (elementName.includes('input')) {
    // click on checkbox, so toggle status
    todoList.toggleTodo(todoId);
    todoElement.classList.toggle('completed');
  }
});
