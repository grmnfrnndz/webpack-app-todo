/**
 * Todo class
 */
export class Todo {

    static todoFromJson({id, todo, completed, create_date}) {
        const tempTodo = new Todo(todo);
        tempTodo.id = id;
        tempTodo.completed = completed;
        tempTodo.create_date = create_date;
        return tempTodo;
    }

    constructor(todo) {
        this.todo = todo;
        this.id = new Date().getTime();
        this.completed = false;
        this.create_date = new Date();
    }

}


