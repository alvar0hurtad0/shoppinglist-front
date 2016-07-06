var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var http_1 = require("angular2/http");
var Rx_1 = require('rxjs/Rx');
var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        this.todos = [];
    }
    TodoService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    TodoService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return Rx_1.Observable.throw(errMsg);
    };
    TodoService.prototype.addTodo = function (todo) {
        // this.todos = [...this.todos,todo];
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(todo);
        return this.http.post('http://localhost/entity/todo_type/simple_todo', body, headers).map(function (res) { return res.json(); });
    };
    TodoService.prototype.getTodos = function () {
        return this.http.get('http://localhost/get/todos').map(function (res) { return res.json(); });
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TodoService);
    return TodoService;
})();
exports.TodoService = TodoService;
