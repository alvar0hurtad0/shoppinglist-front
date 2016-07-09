import {Injectable} from "angular2/core";
import {HTTP_PROVIDERS, Http, Response, Headers, RequestOptions} from "angular2/http";
import {TodoModel} from "../models/todo-model";

import {Observable} from 'rxjs/Rx';


@Injectable()
export class TodoService {
    private service_url = 'http://localhost';
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
        var me = this.http.post(this.service_url + '/entity/todo_type/simple_todo/', body, headers)
            .map((res:Response) => res.json());
        alert (me);
        return this.http.post(this.service_url + '/entity/todo_type/simple_todo/', body, headers)
            .map((res:Response) => res.json());
    }

    getTodos() {
        return this.http.get(this.service_url + '/api/todos').map((res:Response) => res.json());
    }

}