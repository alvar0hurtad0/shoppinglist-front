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
var StatusSelector = (function () {
    function StatusSelector() {
        this.select = new core_1.EventEmitter();
        this.statuses = ['Started', 'Completed'];
    }
    StatusSelector.prototype.ngOnInit = function () {
        this.select.emit(this.statuses[0]);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], StatusSelector.prototype, "select");
    StatusSelector = __decorate([
        core_1.Component({
            selector: 'status-selector',
            template: "\n        <label>View tasks</label>\n        <select #sel (change)=\"select.emit(sel.value)\">\n            <option *ngFor=\"#status of statuses\" > {{status}}</option>\n        </select>"
        }), 
        __metadata('design:paramtypes', [])
    ], StatusSelector);
    return StatusSelector;
})();
exports.StatusSelector = StatusSelector;
