import {Component, Input} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {TodoService} from '../services/todo-service';
import {TodoListRender} from '../components/todo-list-render';
import {SearchPipe} from '../pipes/search-pipe';
import {SearchStarted} from '../pipes/search-started';
import {TodoModel} from "../models/todo-model";
import {OnInit} from "../../node_modules/angular2/ts/src/core/linker/interfaces";

@Component({
    selector:'todo-list',
    pipes:[SearchPipe,SearchStarted],
    template:`
    <div class="row">
       <div *ngFor="#item of items" class="small-12 medium-6 large-4 column end">
           <div class="todo-container">
                    <input type="checkbox" (change)="toggle.emit(todo)"> {{item.title}}
           </div>
       </div>
    </div>
    `
})
export class TodoList implements OnInit{
    private errorMessage: string;
    public items;

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