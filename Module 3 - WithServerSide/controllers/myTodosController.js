/**
 * Created by ranwahle on 12/27/14.
 */

(function (angular) {
    var controller = function (todoService, loadTasksFactory) {

        var self = this;
      //  this.myTodos = todoService.loadTasks();
        this.todoService = todoService;
        this.loadTasksFactory = loadTasksFactory;
        this.loadTasks();


    };

    if (!controller.prototype.addTask) {
        controller.prototype.addTask = function () {

            var self = this;

            this.newTask.DueDate =
                moment(this.newTask.DueDate,
                    'DD-MM-YYYY');
            this.todoService.addTask(this.newTask)
                .success(function()
            {
                self.loadTasks();
            });
            this.newTask = {};
        };

        controller.prototype.loadTasks = function()
        {
            var self = this;
            this.loadTasksFactory.loadTasks()
                .success(function(response)
            {
                self.myTodos = response;
            });
        };

        controller.prototype.getTaskById = function()
        {
            var self = this;
            this.newTask =
                this.todoService.getTaskById(this.taskId);


        };
    }

    angular.module('ToDoListApp').
        controller('myToDosController',
        ['todoService','loadTasksFactory', controller]);
}(window.angular));