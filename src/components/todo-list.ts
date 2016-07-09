import {Component, Input} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {TodoService} from '../services/todo-service';
import {TodoModel} from "../models/todo-model";
import {OnInit} from "../../node_modules/angular2/ts/src/core/linker/interfaces";

@Component({
    selector:'todo-list',
    templateUrl: 'templates/todo-list.component.html',
})
export class TodoList implements OnInit{
    private errorMessage: string;
    private items;

    @Input() status;
    @Input() term;

    constructor(private todoService:TodoService){}
    ngOnInit() {
        this.getTodos();
    }
    getTodos() {
        this.todoService.getTodos().subscribe(
            data => { this.items = data},
            err => console.error(err),
            () => console.log('done loading foods')
        );
    }
}