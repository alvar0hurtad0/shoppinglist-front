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
var core_1 = require('angular2/core');
var todo_service_1 = require('../services/todo-service');
var todo_model_1 = require('../models/todo-model');
var MyInput = (function () {
    function MyInput(todoService) {
        this.todoService = todoService;
        this.todoInput = new todo_model_1.TodoModel();
    }
    MyInput.prototype.onSubmit = function (myInput) {
        this.todoService.addTodo(this.todoInput);
        myInput.value = '';
        myInput.focus();
        this.todoInput = new todo_model_1.TodoModel();
    };
    MyInput = __decorate([
        core_1.Component({
            selector: 'my-input',
            template: "\n    <div class=\"row\">\n        <div class=\"small-12 medium-10 large-8 medium-centered column\">\n            <h1>Todo List</h1>\n            <h2>Angular example</h2>\n            <form (submit)=\"onSubmit(myInput)\">\n                <input class=\"enter-todo\" #myInput type=\"text\" [(ngModel)]=\"todoInput.title\" placeholder=\"Enter a new task\"/>\n            </form>\n        </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], MyInput);
    return MyInput;
})();
exports.MyInput = MyInput;
