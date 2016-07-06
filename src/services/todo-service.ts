import {Injectable} from "angular2/core";
import {HTTP_PROVIDERS, Http, Response, Headers, RequestOptions} from "angular2/http";
import {TodoModel} from "../models/todo-model";

import {Observable} from 'rxjs/Rx';


@Injectable()
export class TodoService {
    todos =[]
    constructor(private http: Http) {}


    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
    addTodo(todo:TodoModel){
       // this.todos = [...this.todos,todo];
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(todo);
        return this.http.post('http://localhost/entity/todo_type/simple_todo', body, headers).map((res:Response) => res.json());
    }

    getTodos() {
        return this.http.get('http://localhost/get/todos').map((res:Response) => res.json());
    }

}