
export class TodoList {

    constructor() {
        this.todos = [];
    }


    createTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(todoId) {
        this.todos = this.todos.filter(todo => todo.id !== todoId);
    }

    toggleTodo(todoId) {
        this.todos = this.todos.map(todo => {
            if (todo.id === todoId) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
    }

    removeCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed);
    }

}


