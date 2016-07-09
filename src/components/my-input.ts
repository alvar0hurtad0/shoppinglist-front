import {Component} from 'angular2/core';
import {TodoService} from '../services/todo-service';
import {TodoModel} from '../models/todo-model';

@Component({
    selector: 'my-input',
    templateUrl: 'templates/my-input.component.html',
})
export class MyInput {

    todoInput:TodoModel = new TodoModel();

    constructor(public todoService:TodoService){
    }

    onSubmit(myInput) {
        
        this.todoService.addTodo(this.todoInput);
        myInput.value ='';
        myInput.focus();
        this.todoInput = new TodoModel();
    }
}
