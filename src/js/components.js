/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
const divTodoList = document.querySelector('.todo-list');

export const createTodoHtml = (todo) => {
  const htmlTodo = `
   <li class=${todo.completed ? 'completed' : ''} data-id="${todo.id}">
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
