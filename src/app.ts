import {bootstrap} from "angular2/bootstrap";
import {HTTP_PROVIDERS} from 'angular2/http';
import {Component} from 'angular2/core';
import {enableProdMode} from 'angular2/core';
enableProdMode();

/* Components */
import {MyInput} from './components/my-input';
import {TodoList} from './components/todo-list';

/* Services */
import {TodoService} from './services/todo-service';

@Component({
  selector: 'todo-list-app',
  directives:[MyInput,TodoList],
  template: `
  <div class="input-container">
    <my-input></my-input>
  </div>
  <todo-list [status]="status" [term]="term"></todo-list>
  `
})
class App {

}

bootstrap(App,[HTTP_PROVIDERS, TodoService]);