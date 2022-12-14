/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */
import { todoList } from '..';
import { Todo } from '../classes';

/* eslint-disable import/prefer-default-export */
const divTodoList = document.querySelector('.todo-list');
const taskInput = document.querySelector('.new-todo');
const clearButton = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const anchorFilters = document.querySelectorAll('.filtro');

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
  } else if (elementName.includes('button')) {
    // click on X button, so delete task
    todoList.deleteTodo(todoId); // Delete in array
    divTodoList.removeChild(todoElement); // Delete in HTML
  }

  clearButton.addEventListener('click', () => {
    todoList.deleteCompleted(); // Delete in array
    for (let i = divTodoList.children.length - 1; i >= 0; i--) {
      const element = divTodoList.children[i];
      if (element.classList.contains('completed')) {
        divTodoList.removeChild(element); // Delete in HTML
      }
    }
  });

  console.log(todoList);
});

ulFilters.addEventListener('click', (event) => {
  console.log(event.target.text);

  const newFilter = event.target.text;
  // eslint-disable-next-line no-useless-return
  if (!newFilter) return;

  anchorFilters.forEach((elem) => elem.classList.remove('selected'));
  event.target.classList.add('selected');

  for (const elem of divTodoList.children) {
    elem.classList.remove('hidden');
    const completed = elem.classList.contains('completed');

    switch (newFilter) {
      case 'Pending':
        if (completed) {
          elem.classList.add('hidden');
        }
        break;

      case 'Completed':
        if (!completed) {
          elem.classList.add('hidden');
        }
        break;

      default:
        elem.classList.remove('hidden');
        break;
    }
  }
});
