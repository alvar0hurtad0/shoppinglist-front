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
var TodoList = (function () {
    function TodoList(todoService) {
        this.todoService = todoService;
    }
    TodoList.prototype.ngOnInit = function () {
        this.getTodos();
    };
    TodoList.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getTodos().subscribe(function (data) { _this.items = data; }, function (err) { return console.error(err); }, function () { return console.log('done loading foods'); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TodoList.prototype, "status");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TodoList.prototype, "term");
    TodoList = __decorate([
        core_1.Component({
            selector: 'todo-list',
            templateUrl: 'templates/todo-list.component.html',
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoList);
    return TodoList;
})();
exports.TodoList = TodoList;
