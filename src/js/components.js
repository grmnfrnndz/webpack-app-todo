// ref HTML
import {todoList} from "../index";
import {Todo} from "../class";

const divTodoList = document.querySelector('.todo-list');
const buttonNewTodo = document.querySelector('.new-todo');
const buttonClearCompletedTodo = document.querySelector('.clear-completed');
const ulFilters = document.querySelectorAll('.filtro');



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


buttonNewTodo.addEventListener('keyup', (event) => {
    if (event.keyCode !== 13) return;
    if (event.target.value.trim() === '') return;

    const todo = new Todo(event.target.value);
    todoList.createTodo(todo);
    createTodoHTML(todo);
    event.target.value = '';
    console.log('created todo');
});


divTodoList.addEventListener('click', (event) => {
    // closest element html more near with class, id, tag or property
    const elementLi = event.target.closest('[data-id]');
    if (!elementLi || !event.target.closest('.toggle')) return;

    const todoId = elementLi.getAttribute('data-id');
    elementLi.classList.toggle('completed');
    todoList.toggleTodo(todoId);
    console.log('toggle completed todo')
});

divTodoList.addEventListener('click', (event) => {
    const elementLi = event.target.closest('[data-id]');
    if (!elementLi || !event.target.closest('.destroy')) return;

    const todoId = elementLi.getAttribute('data-id');
    elementLi.remove();
    todoList.removeTodo(todoId);
    console.log('remove todo');
});


buttonClearCompletedTodo.addEventListener('click', (event) => {
    todoList.removeCompleted();
    const elements = document.querySelectorAll('.completed');

    for (const element of elements) {
        element.remove();
    }

    console.log(todoList);
});



ulFilters.forEach(elementLi => {
    elementLi.addEventListener('click', (event) => {
        ulFilters.forEach(elem => elem.classList.remove('selected'));
        event.target.classList.add('selected');

        const filter =  event.target.text;

        for (const element of divTodoList.children) {

            element.classList.remove('hidden');
            const completed = element.classList.contains('completed');

            switch(filter) {
                case 'Todos':
                    break;
                case 'Pendientes':
                    if (completed) {
                        element.classList.add('hidden');
                    }
                    break;
                case 'Completados':
                    if (!completed) {
                        element.classList.add('hidden');
                    }
                    break;
            }




        }


    });
})


