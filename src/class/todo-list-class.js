import {Todo} from "./todo.class";

export class TodoList {

    constructor() {
        // this.todos = [];
        this.loadLocalStorage();
    }


    createTodo(todo) {
        this.todos.push(todo);
        this.saveLocalStorage();
    }

    removeTodo(todoId) {
        this.todos = this.todos.filter(todo => todo.id !== parseInt(todoId));
        this.saveLocalStorage();
    }

    toggleTodo(todoId) {
        this.todos = this.todos.map(todo => {
            if (todo.id === parseInt(todoId)) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.saveLocalStorage();
    }

    removeCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed);
        this.saveLocalStorage();
    }

    saveLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    loadLocalStorage() {
        this.todos = (localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : [];
        this.todos = this.todos.map(Todo.todoFromJson);
    }


}


