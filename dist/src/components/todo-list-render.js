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
var TodoListRender = (function () {
    function TodoListRender() {
        this.toggle = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TodoListRender.prototype, "todo");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TodoListRender.prototype, "toggle");
    TodoListRender = __decorate([
        core_1.Component({
            selector: 'todo-list-render',
            styles: ["\n        .Completed {\n            text-decoration: line-through;\n        }\n    "],
            template: "\n                <div class=\"todo-container\">\n                    <input type=\"checkbox\" (change)=\"toggle.emit(todo)\">\n                    <span [ngClass]=\"todo.status\">{{todo.title}}</span>\n                </div>\n\n                "
        }), 
        __metadata('design:paramtypes', [])
    ], TodoListRender);
    return TodoListRender;
})();
exports.TodoListRender = TodoListRender;
