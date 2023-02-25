import './styles.css';
import {Todo, TodoList} from "./class";
import {createTodoHTML} from "./js/components";

export const todoList = new TodoList();
// const todo = new Todo('Learning Javascript');
//
// todoList.createTodo(todo);
// createTodoHTML(todo);

console.log(todoList.todos);
todoList.todos.forEach(createTodoHTML);
