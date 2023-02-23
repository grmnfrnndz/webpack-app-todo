import {Todo} from "../class";

// ref HTML
const divTodoList = document.querySelector('.todo-list');



/**
 *
 * @param {Todo} todo
 */
export const createTodoHTML = (todo) => {

    const htmlTodo = `
        <li class="${todo.completed ? 'completed': ''}" data-id="${todo.id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${todo.completed ? 'checked': ''}>
                <label>${todo.todo}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);
}





