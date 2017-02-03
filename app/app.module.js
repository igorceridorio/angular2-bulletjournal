"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
// Components used in the app
var app_component_1 = require('./app.component');
var my_tasks_component_1 = require('./my-tasks/my-tasks.component');
var edit_tasks_component_1 = require('./edit-tasks/edit-tasks.component');
var new_task_component_1 = require('./new-task/new-task.component');
// Modules used in the app
var my_tasks_module_1 = require('./my-tasks/my-tasks.module');
var new_task_module_1 = require('./new-task/new-task.module');
// Services used in the app
var task_service_1 = require('./services/task.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                my_tasks_module_1.MyTasksModule,
                new_task_module_1.NewTaskModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: '/my-tasks', pathMatch: 'full' },
                    { path: 'my-tasks', component: my_tasks_component_1.MyTasksComponent },
                    { path: 'edit-tasks', component: edit_tasks_component_1.EditTasksComponent },
                    { path: 'new-task', component: new_task_component_1.NewTaskComponent }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                edit_tasks_component_1.EditTasksComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [task_service_1.TaskService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map