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
var bootstrap_1 = require("angular2/bootstrap");
var http_1 = require('angular2/http');
var core_1 = require('angular2/core');
var core_2 = require('angular2/core');
core_2.enableProdMode();
/* Components */
var my_input_1 = require('./components/my-input');
var todo_list_1 = require('./components/todo-list');
/* Services */
var todo_service_1 = require('./services/todo-service');
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'todo-list-app',
            directives: [my_input_1.MyInput, todo_list_1.TodoList],
            template: "\n  <div class=\"input-container\">\n    <my-input></my-input>\n  </div>\n  <todo-list [status]=\"status\" [term]=\"term\"></todo-list>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
bootstrap_1.bootstrap(App, [http_1.HTTP_PROVIDERS, todo_service_1.TodoService]);
