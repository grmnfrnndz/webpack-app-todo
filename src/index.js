import './styles.css';
import {Todo, TodoList} from "./class";
import {createTodoHTML} from "./js/components";

const todoList = new TodoList();
const todo = new Todo('Learning Javascript');

todoList.createTodo(todo);


createTodoHTML(todo);

